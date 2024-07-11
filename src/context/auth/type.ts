export const HANDLE_LOGIN = "HANDLE_LOGIN";
export const HANDLE_LOGOUT = "HANDLE_LOGOUT";
export const HANDLE_AUTH_MODAL_TOGGLE = "HANDLE_AUTH_MODAL_TOGGLE";
export const HANDLE_CHANGE_SCREEN = "HANDLE_CHANGE_SCREEN";
export const ADD_REGISTER_USER_DATA = "ADD_REGISTER_USER_DATA";

export type Login = {
  userName: string;
  sessionTime: Date;
};

export type HandleRegisterNewUser = {
  type: typeof ADD_REGISTER_USER_DATA;
  newUserDetail: any;
};

export type HandleScreenToggle = {
  type: typeof HANDLE_CHANGE_SCREEN;
};

export type HandleAuthModalToggle = {
  type: typeof HANDLE_AUTH_MODAL_TOGGLE;
  isModalOpen: boolean;
};

export type HandleLogin = {
  type: typeof HANDLE_LOGIN;
  userData: any;
};

export type HandleLogout = {
  type: typeof HANDLE_LOGOUT;
};

export type AuthState = {
  isLogin: boolean;
  isLoginScreen: boolean;
  isModalOpenForAuth: boolean;
  userDetails: any;
  allUserDetailsRegister: any;
};

export type AuthAction =
  | HandleLogin
  | HandleLogout
  | HandleAuthModalToggle
  | HandleScreenToggle
  | HandleRegisterNewUser;
