import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthComponent from "components/auth";
import Forbidden from "components/common/Forbidden";

const AuthWrapper = () => {
  return (
    <Routes>
      <Route path={"/"} element={<AuthComponent />} />
      <Route
        path={"/*"}
        element={
          <Forbidden
            title="Page Not Found"
            subTitle="The page you are looking for does not exist."
          />
        }
      />
    </Routes>
  );
};

export default AuthWrapper;
