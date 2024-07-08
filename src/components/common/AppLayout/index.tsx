import React from "react";
import Button from "components/common/style-components/Button";
import { handleThemeChange } from "context/theme/reducer";
import { useThemeDispatchContext, useThemeStateContext } from "context/theme";
import {
  ApplicationWrapper,
  AppNavBar,
  AppViewer,
  Heading,
  ToggleAction,
} from "components/common/AppLayout/styles";

const AppLayout = ({ children }: any) => {
  const theme = useThemeStateContext();
  const dispatch = useThemeDispatchContext();
  return (
    <ApplicationWrapper>
      <AppNavBar>
        <Heading light={theme.light}>Create Post</Heading>
        <ToggleAction>
          <Button
            handleClick={() => {
              dispatch(handleThemeChange());
            }}
          >
            {theme.light ? "dark" : "light"}
          </Button>
        </ToggleAction>
      </AppNavBar>
      <AppViewer>{children}</AppViewer>
    </ApplicationWrapper>
  );
};

export default AppLayout;
