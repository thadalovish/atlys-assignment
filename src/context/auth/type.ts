export const HANDLE_LOGIN = "HANDLE_LOGIN";
export const HANDLE_LOGOUT = "HANDLE_LOGOUT";

export type Login = {
  userName: string;
  password: string;
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
  userDetails: any;
};

export type AuthAction = HandleLogin | HandleLogout;
