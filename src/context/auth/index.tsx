import React, {
  Dispatch,
  createContext,
  useReducer,
  useContext,
  ReactNode,
} from "react";
import reducer, { initialState } from "context/auth/reducer";
import { AuthAction, AuthState } from "context/auth/type";

type StateContext = {
  state: AuthState;
};

type DispatchContext = {
  dispatch: Dispatch<AuthAction>;
};

const AuthStateContext = createContext<StateContext | undefined>(undefined);

const AuthDispatchContext = createContext<DispatchContext | undefined>(
  undefined
);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthDispatchContext.Provider value={{ dispatch }}>
      <AuthStateContext.Provider value={{ state }}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthStateContext = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthStateContext should be wrap under theme Provider");
  }
  const { state } = context;
  return { ...state };
};

export const useAuthDispatchContext = () => {
  const dispatchContext = useContext(AuthDispatchContext);
  if (!dispatchContext) {
    throw new Error(
      "useAuthDispatchContext should be wrap under theme Provider"
    );
  }
  const { dispatch } = dispatchContext;
  return dispatch;
};
