import { Reducer } from "react";
import { allUserDetailsRegister } from "context/auth/constant";
import {
  AuthAction,
  AuthState,
  HANDLE_LOGIN,
  HandleLogin,
  HANDLE_LOGOUT,
  HandleLogout,
} from "context/auth/type";
import { getFromLocal, removeFromLocal, storeInLocal } from "utils/session";

export const initialState: AuthState = {
  isLogin: getFromLocal("userDetail") ? true : false,
  userDetails: getFromLocal("userDetail") || null,
  allUserDetailsRegister: getFromLocal("userRegister")
    ? getFromLocal("userRegister")
    : storeInLocal("userRegister", allUserDetailsRegister),
};

const reducer: Reducer<AuthState, AuthAction> = (state, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      storeInLocal("userDetail", action.userData);
      return {
        ...state,
        userDetails: action.userData,
        isLogin: action?.userData?.userName && true,
      };
    case HANDLE_LOGOUT:
      removeFromLocal("userDetail");
      return {
        ...state,
        userDetails: null,
        isLogin: false,
      };
  }
};

export default reducer;

export const handleLogin = (userData: any): HandleLogin => ({
  type: HANDLE_LOGIN,
  userData,
});

export const handleLogout = (): HandleLogout => ({
  type: HANDLE_LOGOUT,
});
