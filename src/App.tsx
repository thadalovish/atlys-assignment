import React from "react";
import { useThemeStateContext } from "context/theme";
import GlobalStyle, { AppWrapper } from "styles/GlobalStyle";
import AppLayout from "components/common/AppLayout";
import AuthModalView from "components/auth/AuthModalView";
import AllRoutes from "routes";
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { handleAuthModalToggle } from "context/auth/reducer";

function App(): JSX.Element {
  const dispatch = useAuthDispatchContext();
  const theme = useThemeStateContext();
  const { isModalOpenForAuth } = useAuthStateContext();

  const closeModal = () => dispatch(handleAuthModalToggle(false));

  return (
    <AppWrapper>
      <GlobalStyle light={theme.light} />
      <AppLayout>
        <AllRoutes />
        <AuthModalView isModalOpen={isModalOpenForAuth} onClose={closeModal} />
      </AppLayout>
    </AppWrapper>
  );
}

export default App;
