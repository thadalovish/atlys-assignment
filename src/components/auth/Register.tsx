import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonWrapper } from "components/auth/styles";
import Button from "components/common/style-components/Button";
import FormField from "components/common/FormField";
import AuthLayout from "components/auth/AuthLayout";
import { emailRegex, passwordRegex } from "components/auth/constant";

interface RegisterProps {
  isLoginScreen: boolean;
  handleToggleForm: () => void;
}

interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({
  isLoginScreen,
  handleToggleForm,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log("Registration form submitted successfully", data);
    // Add your registration logic here
  };

  return (
    <AuthLayout
      title="Create an account to continue"
      subTitle="SIGN UP"
      isLoginScreen={isLoginScreen}
      handleToggleForm={handleToggleForm}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "inherit" }}>
        <FormField
          name="email"
          control={control}
          errors={errors.email}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email address",
            },
          }}
          placeholder="Email"
        />
        <FormField
          name="username"
          control={control}
          errors={errors.username}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
          }}
          placeholder="Username"
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
            Continue
          </Button>
        </ButtonWrapper>
      </form>
    </AuthLayout>
  );
};

export default Register;
