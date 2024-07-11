import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonWrapper, ErrorText } from "components/auth/styles";
import Button from "components/common/style-components/Button";
import FormField from "components/common/FormField";
import AuthLayout from "components/auth/AuthLayout";
import { registerFormFields } from "components/auth/helperFunction";
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { storeInLocal } from "utils/session";
import { handleLogin } from "context/auth/reducer";

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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const { allUserDetailsRegister } = useAuthStateContext();
  const dispatch = useAuthDispatchContext();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    const foundDuplicate = [...allUserDetailsRegister].filter(
      (item: any) =>
        item.email === data.email || item.username === data.username
    );
    if (foundDuplicate.length) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
      storeInLocal("userRegister", [data, ...allUserDetailsRegister]);
      dispatch(
        handleLogin({
          userName: data.username,
          sessionTime: new Date(),
        })
      );
      navigate("/post");
    }
  };

  return (
    <AuthLayout
      title="Create an account to continue"
      subTitle="SIGN UP"
      isLoginScreen={isLoginScreen}
      handleToggleForm={handleToggleForm}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "inherit" }}>
        {registerFormFields.map((field) => (
          <FormField
            key={field.name}
            name={field.name}
            control={control}
            errors={errors[field.name as keyof RegisterFormValues]}
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
        {isDuplicate ? (
          <ErrorText>
            Email or UserName already taken use different userName or Email to
            Register
          </ErrorText>
        ) : (
          <></>
        )}
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
