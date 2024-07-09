import React, { forwardRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { useThemeStateContext } from "context/theme";

interface StyledInputProps {
  $theme?: any;
  $hasIcon?: any;
}

interface InputProps
  extends PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>> {
  icon?: React.ReactNode; // Icon component or any other React node
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme }) => theme?.current?.input}
  ${({ theme }) => theme?.input}
  padding-left: ${(props) =>
    props.$hasIcon ? "36px" : "12px"}; /* Adjust padding for icon */
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...rest }, ref) => {
    const theme = useThemeStateContext();

    return (
      <div style={{ position: "relative" }}>
        <StyledInput
          ref={ref}
          {...rest}
          theme={theme}
          $hasIcon={!!icon} // Add $hasIcon prop to adjust padding if icon is present
        />
        {icon && <IconContainer>{icon}</IconContainer>}
      </div>
    );
  }
);

export default Input;
