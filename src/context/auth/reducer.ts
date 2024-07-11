import { Reducer } from "react";
import { allUserDetailsRegister } from "context/auth/constant";
import {
  AuthAction,
  AuthState,
  HANDLE_LOGIN,
  HandleLogin,
  HANDLE_LOGOUT,
  HandleLogout,
  HANDLE_AUTH_MODAL_TOGGLE,
  HANDLE_CHANGE_SCREEN,
  HandleScreenToggle,
  HandleAuthModalToggle,
} from "context/auth/type";
import { getFromLocal, removeFromLocal, storeInLocal } from "utils/helper";

export const initialState: AuthState = {
  isLogin: getFromLocal("userDetail") ? true : false,
  isModalOpenForAuth: false,
  isLoginScreen: true,
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
    case HANDLE_AUTH_MODAL_TOGGLE:
      return {
        ...state,
        isModalOpenForAuth: action.isModalOpen,
      };
    case HANDLE_CHANGE_SCREEN:
      return {
        ...state,
        isLoginScreen: !state.isLoginScreen,
      };
  }
};

export default reducer;

export const handleLogin = (userData: any): HandleLogin => ({
  type: HANDLE_LOGIN,
  userData,
});

export const handleScreenToggle = (): HandleScreenToggle => ({
  type: HANDLE_CHANGE_SCREEN,
});

export const handleAuthModalToggle = (
  isModalOpen: boolean
): HandleAuthModalToggle => ({
  type: HANDLE_AUTH_MODAL_TOGGLE,
  isModalOpen,
});

export const handleLogout = (): HandleLogout => ({
  type: HANDLE_LOGOUT,
});
