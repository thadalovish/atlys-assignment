import { createGlobalStyle, css, styled } from "styled-components";
import "../assets/icomoon/style.css";
import {
  DarkThemeBackgroundColor,
  DarkThemeTextColor,
  LightThemeBackgroundColor,
  LightThemeTextColor,
} from "styles/Theme";

interface GlobalStyleProps {
  light: boolean;
}

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${({ light }: any) => {
      return light
        ? css`
            background-color: ${LightThemeBackgroundColor};
            color: ${LightThemeTextColor};
          `
        : css`
            background-color: ${DarkThemeBackgroundColor};
            color: ${DarkThemeTextColor};
          `;
    }}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }      
`;

export default GlobalStyle;
