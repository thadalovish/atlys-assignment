import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonWrapper, ErrorText } from "components/auth/styles";
import Button from "components/common/style-components/Button";
import FormField from "components/common/FormField";
import AuthLayout from "components/auth/AuthLayout";
import { loginFormFields } from "components/auth/helperFunction";
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { handleAuthModalToggle, handleLogin } from "context/auth/reducer";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { allUserDetailsRegister } = useAuthStateContext();
  const dispatch = useAuthDispatchContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isBadCred, setIsBadCred] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    const filterData: any = [...allUserDetailsRegister].filter(
      (item: any) =>
        (item.username === data.username || item.email === data.username) &&
        item.password === data.password
    );
    if (filterData.length) {
      setIsBadCred(false);
      dispatch(
        handleLogin({
          userName: data.username,
          sessionTime: new Date(),
        })
      );
      dispatch(handleAuthModalToggle(false));
      navigate("/post");
    } else {
      setIsBadCred(true);
    }
  };

  return (
    <AuthLayout title="Log into your account" subTitle="WELCOME BACK">
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
        {isBadCred ? (
          <ErrorText>Bad Credentials Try With Different Credentials</ErrorText>
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
            Login now
          </Button>
        </ButtonWrapper>
      </form>
    </AuthLayout>
  );
};

export default LoginComponent;
