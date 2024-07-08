export const HANDLE_THEME_CHANGE = "HANDLE_THEME_CHANGE";

export type HandleThemeChange = {
  type: typeof HANDLE_THEME_CHANGE;
};

export type ThemeState = {
  theme: any;
  current: string | any;
  light: boolean;
};
export type ThemeAction = HandleThemeChange;
