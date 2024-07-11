import React from "react";
import Button from "components/common/style-components/Button";
import { handleThemeChange } from "context/theme/reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeDispatchContext, useThemeStateContext } from "context/theme";
import {
  ApplicationWrapper,
  AppNavBar,
  AppViewer,
  Heading,
  ToggleAction,
  LogoutButton,
  ButtonWrapper,
} from "components/common/AppLayout/styles";
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { handleLogout } from "context/auth/reducer";

const AppLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const theme = useThemeStateContext();
  const dispatch = useThemeDispatchContext();
  const authDispatch = useAuthDispatchContext();
  const location = useLocation();
  const { isLogin } = useAuthStateContext();

  return (
    <ApplicationWrapper>
      <AppNavBar>
        <Heading
          light={theme?.light}
          onClick={() => {
            navigate("/");
          }}
        >
          Create Post
        </Heading>
        <ToggleAction>
          <ButtonWrapper>
            <Button
              handleClick={() => {
                authDispatch(handleLogout());
              }}
            >
              Session Timeout
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              handleClick={() => {
                dispatch(handleThemeChange());
              }}
            >
              {theme.light ? "dark" : "light"}
            </Button>
          </ButtonWrapper>
          {isLogin && (
            <LogoutButton
              onClick={() => {
                authDispatch(handleLogout());
                navigate("/auth");
              }}
            >
              <span className="icon-exit" />
            </LogoutButton>
          )}
        </ToggleAction>
      </AppNavBar>
      <AppViewer without={location.pathname === "/post" ? true : false}>
        {children}
      </AppViewer>
    </ApplicationWrapper>
  );
};

export default AppLayout;
