import React, { useState } from "react";
import Login from "components/auth/Login";
import Register from "components/auth/Register";

const AuthComponent = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const handleToggleForm = () => {
    setIsLoginScreen((prev) => !prev);
  };

  return (
    <>
      {isLoginScreen ? (
        <Login
          isLoginScreen={isLoginScreen}
          handleToggleForm={handleToggleForm}
        />
      ) : (
        <Register
          isLoginScreen={isLoginScreen}
          handleToggleForm={handleToggleForm}
        />
      )}
    </>
  );
};

export default AuthComponent;
