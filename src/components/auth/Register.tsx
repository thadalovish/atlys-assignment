import React from "react";
import {
  FieldWrapper,
  FieldHelperText,
  ButtonWrapper,
} from "components/auth/styles";
import Button from "components/common/style-components/Button";
import Input from "components/common/style-components/Input";
import AuthLayout from "components/auth/AuthLayout";

const Register = ({ isLoginScreen, handleToggleForm }: any) => {
  return (
    <AuthLayout
      title="Create an account to continue"
      subTitle="SIGN UP"
      isLoginScreen={isLoginScreen}
      handleToggleForm={handleToggleForm}
    >
      <form onSubmit={() => {}}>
        <FieldWrapper>
          <FieldHelperText>Email or Username</FieldHelperText>
          <Input
            style={{ width: "416px", height: "32px", padding: "6px" }}
            placeholder="Enter your password"
            value={""}
            onChange={() => {}}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FieldHelperText>Username</FieldHelperText>
          <Input
            style={{ width: "416px", height: "32px", padding: "6px" }}
            placeholder="Choose a preferred username"
            value={""}
            onChange={() => {}}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FieldHelperText>Password</FieldHelperText>
          <Input
            style={{ width: "416px", height: "32px", padding: "6px" }}
            placeholder="Enter your password"
            value={""}
            onChange={() => {}}
          />
        </FieldWrapper>
        <ButtonWrapper>
          <Button
            handleClick={() => {}}
            style={{
              width: "100%",
              height: "43px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "19.36px",
              borderRadius: "4px",
            }}
          >
            Continue
          </Button>
        </ButtonWrapper>
      </form>
    </AuthLayout>
  );
};

export default Register;
