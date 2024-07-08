import { Reducer } from "react";
import {
  ThemeAction,
  ThemeState,
  HANDLE_THEME_CHANGE,
  HandleThemeChange,
} from "context/theme/type";
import { styleSheet } from "components/common/style-components/style";

export const initialState: ThemeState = {
  current: styleSheet.dark,
  theme: styleSheet,
  light: false,
};

const reducer: Reducer<ThemeState, ThemeAction> = (state, action) => {
  switch (action.type) {
    case HANDLE_THEME_CHANGE:
      return {
        ...state,
        light: !state.light,
        current: !state.light ? styleSheet.light : styleSheet.dark,
      };
  }
};

export default reducer;

export const handleThemeChange = (): HandleThemeChange => ({
  type: HANDLE_THEME_CHANGE,
});
