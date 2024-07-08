import { Reducer } from "react";
import {
  AuthAction,
  AuthState,
  HANDLE_LOGIN,
  HandleLogin,
  Login,
  HANDLE_LOGOUT,
  HandleLogout,
} from "context/auth/type";

export const initialState: AuthState = {
  isLogin: false,
  userDetails: null,
};

const reducer: Reducer<AuthState, AuthAction> = (state, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      return {
        ...state,
        userDetails: action.userData.userName,
        isLogin: action?.userData?.userName && true,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        userDetails: null,
        isLogin: false,
      };
  }
};

export default reducer;

export const handleLogin = (userData: Login): HandleLogin => ({
  type: HANDLE_LOGIN,
  userData,
});

export const handleLogout = (): HandleLogout => ({
  type: HANDLE_LOGOUT,
});
