import React, {
  Dispatch,
  createContext,
  useReducer,
  useContext,
  ReactNode,
} from "react";
import reducer, { initialState } from "context/theme/reducer";
import { ThemeAction, ThemeState } from "context/theme/type";

type StateContext = {
  state: ThemeState;
};

type DispatchContext = {
  dispatch: Dispatch<ThemeAction>;
};

const ThemeStateContext = createContext<StateContext | undefined>(undefined);

const ThemeDispatchContext = createContext<DispatchContext | undefined>(
  undefined
);

const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeDispatchContext.Provider value={{ dispatch }}>
      <ThemeStateContext.Provider value={{ state }}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeStateContext = () => {
  const context = useContext(ThemeStateContext);
  if (!context) {
    throw new Error("useThemeStateContext should be wrap under theme Provider");
  }
  const { state } = context;
  return { ...state };
};

export const useThemeDispatchContext = () => {
  const dispatchContext = useContext(ThemeDispatchContext);
  if (!dispatchContext) {
    throw new Error(
      "useThemeDispatchContext should be wrap under theme Provider"
    );
  }
  const { dispatch } = dispatchContext;
  return dispatch;
};
