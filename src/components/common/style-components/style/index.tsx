import { css } from "styled-components";

const common = {
  button: css`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 4px;
  `,
  input: css`
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
  `,
};

const lightTheme = {
  button: css`
    background: #131319;
    color: white;
    border: 2px solid #131319;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: #242e42;
      border: 2px solid #242e42;
    }
  `,
  input: css`
    background: #131319;
    border: 1.5px solid #131319;
    border-radius: 4px;
  `,
};

const darkTheme = {
  button: css`
    border: 2px solid #4a96ff;
    background: #4a96ff;
    color: white;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: #3979d1;
      border: 2px solid #3979d1;
    }
  `,
  input: css`
    background: #27292d;
    border: 1.5px solid #35373b;
    border-radius: 4px;
  `,
};
export const styleSheet = {
  ...common,
  light: lightTheme,
  dark: darkTheme,
};
