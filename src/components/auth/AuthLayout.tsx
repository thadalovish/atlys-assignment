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
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { handleScreenToggle } from "context/auth/reducer";

const AuthLayout = ({ children, title, subTitle, handleToggleForm }: any) => {
  const theme = useThemeStateContext();
  const { isLoginScreen } = useAuthStateContext();
  const dispatch = useAuthDispatchContext();

  return (
    <AuthStyleWrapper>
      <AuthSubHeading light={theme?.light}>{subTitle}</AuthSubHeading>
      <AuthHeading>{title}</AuthHeading>
      <FormWrapper>{children}</FormWrapper>
      <ChangeFormText>
        {isLoginScreen ? "Not registered yet?" : "Already have an account?"}
        <HighlightText
          onClick={() => {
            dispatch(handleScreenToggle());
          }}
        >
          {isLoginScreen ? "Register →" : "Login →"}
        </HighlightText>
      </ChangeFormText>
    </AuthStyleWrapper>
  );
};

export default AuthLayout;
