import React, { useEffect, useState } from "react";
import Login from "components/auth/Login";
import Register from "components/auth/Register";
import { useAuthStateContext } from "context/auth";
import { useNavigate } from "react-router-dom";

const AuthComponent = () => {
  const navigate = useNavigate();
  const { isLogin, isLoginScreen } = useAuthStateContext();

  useEffect(() => {
    //don't want user to lost if login want him to be on post create page
    if (isLogin) {
      navigate("/post");
    }
  }, [isLogin]);

  return <>{isLoginScreen ? <Login /> : <Register />}</>;
};

export default AuthComponent;
