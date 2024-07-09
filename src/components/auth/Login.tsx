import React, { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonWrapper } from "components/auth/styles";
import Button from "components/common/style-components/Button";
import FormField from "components/common/FormField";
import AuthLayout from "components/auth/AuthLayout";
import { loginFormFields } from "components/auth/helperFunction";

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
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onSubmit: SubmitHandler<LoginFormValues> = useCallback((data) => {
    console.log("Login form submitted successfully", data);
    // Add your login logic here
  }, []);

  return (
    <AuthLayout
      title="Log into your account"
      subTitle="WELCOME BACK"
      isLoginScreen={isLoginScreen}
      handleToggleForm={handleToggleForm}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "inherit" }}>
        {loginFormFields.map((field) => (
          <FormField
            key={field.name}
            name={field.name}
            control={control}
            errors={errors[field.name as keyof LoginFormValues]}
            rules={field.rules}
            placeholder={field.placeholder}
            type={isVisible ? "text" : field.type}
            icon={
              <div
                className={`${
                  isVisible ? field?.icon?.openEye : field?.icon?.closeEye
                }`}
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsVisible((prev) => !prev);
                }}
              />
            }
          />
        ))}
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
