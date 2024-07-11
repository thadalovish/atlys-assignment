import React, {
  Dispatch,
  createContext,
  useReducer,
  useContext,
  ReactNode,
} from "react";
import reducer, { initialState } from "context/post/reducer";
import { PostAction, PostState } from "context/post/type";

type StateContext = {
  state: PostState;
};

type DispatchContext = {
  dispatch: Dispatch<PostAction>;
};

const PostStateContext = createContext<StateContext | undefined>(undefined);

const PostDispatchContext = createContext<DispatchContext | undefined>(
  undefined
);

const PostContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostDispatchContext.Provider value={{ dispatch }}>
      <PostStateContext.Provider value={{ state }}>
        {children}
      </PostStateContext.Provider>
    </PostDispatchContext.Provider>
  );
};

export default PostContextProvider;

export const usePostStateContext = () => {
  const context = useContext(PostStateContext);
  if (!context) {
    throw new Error("usePostStateContext should be wrap under theme Provider");
  }
  const { state } = context;
  return { ...state };
};

export const usePostDispatchContext = () => {
  const dispatchContext = useContext(PostDispatchContext);
  if (!dispatchContext) {
    throw new Error(
      "usePostDispatchContext should be wrap under theme Provider"
    );
  }
  const { dispatch } = dispatchContext;
  return dispatch;
};
