import React, { type FC, type PropsWithChildren } from "react";
import styled from "styled-components";
import { useThemeStateContext } from "context/theme";

interface StyledInputProps {
  $theme?: any;
}
type InputProps = PropsWithChildren<{
  value: string;
  onChange?: () => void;
  className?: string;
  style?: any;
  placeholder?: string;
}> &
  StyledInputProps;

export const StyledInput = styled.input<StyledInputProps>`
  ${(props) => props?.theme?.current?.input}
  ${(props) => props?.theme?.input}
`;

const Input: FC<InputProps> = (props) => {
  const { className, style, value, children, placeholder, onChange } = props;
  const theme = useThemeStateContext();
  return (
    <StyledInput
      className={className}
      style={style}
      onChange={onChange}
      theme={theme}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </StyledInput>
  );
};

export default Input;
