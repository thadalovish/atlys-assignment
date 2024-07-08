import React from "react";
import {
  AuthStyleWrapper,
  AuthSubHeading,
  AuthHeading,
  FormWrapper,
  ChangeFormText,
  HighlightText,
} from "components/auth/styles";
import { useThemeStateContext } from "context/theme";

const AuthLayout = ({
  children,
  title,
  subTitle,
  isLoginScreen,
  handleToggleForm,
}: any) => {
  const theme = useThemeStateContext();
  return (
    <AuthStyleWrapper>
      <AuthSubHeading>{subTitle}</AuthSubHeading>
      <AuthHeading light={theme.light}>{title}</AuthHeading>
      <FormWrapper>{children}</FormWrapper>
      <ChangeFormText>
        {isLoginScreen ? "Not registered yet?" : "Already have an account?"}
        <HighlightText
          onClick={() => {
            handleToggleForm();
          }}
        >
          {isLoginScreen ? "Register →" : "Login →"}
        </HighlightText>
      </ChangeFormText>
    </AuthStyleWrapper>
  );
};

export default AuthLayout;
