import React, { forwardRef, type PropsWithChildren } from "react";
import styled from "styled-components";
import { useThemeStateContext } from "context/theme";

interface StyledInputProps {
  $theme?: any;
}

type InputProps = PropsWithChildren<{
  value?: string;
  onChange?: any;
  className?: string;
  style?: any;
  placeholder?: string;
  type?: string;
  name?: string;
}> &
  StyledInputProps;

export const StyledInput = styled.input<StyledInputProps>`
  ${(props) => props?.theme?.current?.input}
  ${(props) => props?.theme?.input}
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    style,
    value,
    children,
    placeholder,
    onChange,
    type,
    name,
  } = props;
  const theme = useThemeStateContext();

  return (
    <StyledInput
      ref={ref}
      name={name}
      type={type}
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
});

export default Input;
