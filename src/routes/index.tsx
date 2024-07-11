import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthStateContext } from "context/auth";
import PrivateRoute from "components/common/PrivateRoute";
import Forbidden from "components/common/Forbidden";
import UnAuthorized from "pages/UnAuthorized";

const Home = lazy(() => import("pages/Home"));
const AuthWrapper = lazy(() => import("pages/AuthWrapper"));

const AllRoutes = () => {
  const { isLogin } = useAuthStateContext();
  const redirectUrl = isLogin ? "/post" : "/auth";

  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={redirectUrl} replace />} />
        <Route
          path="post/*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="auth/*" element={<AuthWrapper />} />
        <Route path="un-auth/" element={<UnAuthorized />} />
        <Route
          path="/*"
          element={
            <Forbidden
              title="Page Not Found"
              subTitle="The page you are looking for does not exist."
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
