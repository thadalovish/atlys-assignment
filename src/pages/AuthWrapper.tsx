import React from "react";
import AuthComponent from "components/auth";
import { Route, Routes } from "react-router-dom";

const AuthWrapper = () => {
  return (
    <Routes>
      <Route path={"/"} element={<AuthComponent />} />
    </Routes>
  );
};

export default AuthWrapper;
