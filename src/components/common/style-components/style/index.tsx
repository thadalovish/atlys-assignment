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
    color: white;
  `,
};

const lightTheme = {
  button: css`
    background: #131319;
    color: white;
    border: 2px solid #131319;
    &:hover {
      background-color: #1e1e25;
      border: 2px solid #1e1e25;
    }
  `,
  input: css`
    background: #131319;
    border: 1.5px solid #131319;
    color: white;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    &:focus-within {
      border: 2px solid white;
    }
  `,
};

const darkTheme = {
  button: css`
    border: 2px solid #4a96ff;
    background: #4a96ff;
    color: white;
    &:hover {
      background-color: #3979d1;
      border: 2px solid #3979d1;
    }
  `,
  input: css`
    background: #27292d;
    border: 1.5px solid #35373b;
    border-radius: 4px;
    color: white;
    &:focus {
      outline: none;
      color: white;
    }

    &:focus-within {
      border: 2px solid #4a96ff;
      color: white;
    }
  `,
};
export const styleSheet = {
  ...common,
  light: lightTheme,
  dark: darkTheme,
};
