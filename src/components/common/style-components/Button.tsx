import React, { type FC, type PropsWithChildren } from "react";
import styled from "styled-components";
import { useThemeStateContext } from "context/theme";

interface StyledButtonProps {
  $theme?: any;
}
type ButtonProps = PropsWithChildren<{
  handleClick?: () => void;
  className?: string;
  style?: any;
  type?: any;
  value?: string;
  disabled?: boolean;
}> &
  StyledButtonProps;

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => props?.theme?.current?.button}
  ${(props) => props?.theme?.button}
`;

const Button: FC<ButtonProps> = (props) => {
  const { className, style, children, handleClick, type, value, disabled } =
    props;
  const theme = useThemeStateContext();
  return (
    <StyledButton
      type={type}
      value={value}
      disabled={disabled}
      className={className}
      style={style}
      onClick={handleClick}
      theme={theme}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
