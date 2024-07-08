import React, { lazy, Suspense, type FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useThemeStateContext } from "context/theme";

import { useAuthStateContext } from "context/auth";
import GlobalStyle from "styles/GlobalStyle";
import AppLayout from "components/common/AppLayout";

const Home = lazy(() => import("pages/Home"));
const AuthWrapper = lazy(() => import("pages/AuthWrapper"));

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

function App(): JSX.Element {
  const theme = useThemeStateContext();
  const { isLogin } = useAuthStateContext();

  const redirectUrl = isLogin ? "/post" : "/auth";

  return (
    <AppWrapper>
      <GlobalStyle light={theme.light} />
      <AppLayout>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Navigate to={redirectUrl} replace />} />
            <Route path="post/*" element={<Home />} />
            <Route path="auth/*" element={<AuthWrapper />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </AppWrapper>
  );
}

export default App;
