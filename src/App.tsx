import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useThemeStateContext } from "context/theme";
import { useAuthStateContext } from "context/auth";
import GlobalStyle, { AppWrapper } from "styles/GlobalStyle";
import AppLayout from "components/common/AppLayout";
import PrivateRoute from "components/common/PrivateRoute";
import Forbidden from "components/common/Forbidden";
import UnAuthorized from "pages/UnAuthorized";

const Home = lazy(() => import("pages/Home"));
const AuthWrapper = lazy(() => import("pages/AuthWrapper"));

function App(): JSX.Element {
  const theme = useThemeStateContext();
  const { isLogin } = useAuthStateContext();

  const redirectUrl = isLogin ? "/post" : "/auth";

  return (
    <AppWrapper>
      <GlobalStyle light={theme?.light} />
      <AppLayout>
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
      </AppLayout>
    </AppWrapper>
  );
}

export default App;
