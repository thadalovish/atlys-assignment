import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonWrapper } from "components/auth/styles";
import Button from "components/common/style-components/Button";
import FormField from "components/common/FormField";
import AuthLayout from "components/auth/AuthLayout";
import {
  emailRegex,
  usernameRegex,
  passwordRegex,
} from "components/auth/constant";

interface LoginComponentProps {
  isLoginScreen: boolean;
  handleToggleForm: () => void;
}

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginComponent: React.FC<LoginComponentProps> = ({
  isLoginScreen,
  handleToggleForm,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const validateUsernameOrEmail = (value: string) => {
    if (!value) return "Username or Email is required";
    if (!value.includes("@")) {
      if (!usernameRegex.test(value)) {
        return "Invalid username format";
      }
    } else {
      if (!emailRegex.test(value)) {
        return "Invalid email format";
      }
    }
    return true;
  };

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Login form submitted successfully", data);
    // Add your login logic here
  };

  return (
    <AuthLayout
      title="Log into your account"
      subTitle="WELCOME BACK"
      isLoginScreen={isLoginScreen}
      handleToggleForm={handleToggleForm}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "inherit" }}>
        <FormField
          name="username"
          control={control}
          errors={errors.username}
          rules={{
            required: "Username or Email is required",
            validate: validateUsernameOrEmail,
          }}
          placeholder="Email or Username"
        />
        <FormField
          name="password"
          control={control}
          errors={errors.password}
          rules={{
            required: "Password is required",
            pattern: {
              value: passwordRegex,
              message:
                "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
            },
          }}
          placeholder="Password"
          type="password"
        />
        <ButtonWrapper>
          <Button
            type="submit"
            value="Submit"
            style={{
              width: "100%",
              height: "43px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "19.36px",
              borderRadius: "4px",
            }}
          >
            Login now
          </Button>
        </ButtonWrapper>
      </form>
    </AuthLayout>
  );
};

export default LoginComponent;
