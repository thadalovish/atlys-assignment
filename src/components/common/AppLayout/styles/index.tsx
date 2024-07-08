import styled from "styled-components";
import { LightThemeTextColor } from "styles/Theme";

type StyleHeadingProps = {
  light: boolean;
};

export const ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AppNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 2px solid #35373b;
`;

export const AppViewer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  height: calc(100vh - 45px);
  justify-content: center;
  overflow-y: auto;
`;

export const Heading = styled.div<StyleHeadingProps>`
  ${({ light }) => `font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  color: ${light ? LightThemeTextColor : "#fff"};
`}
`;

export const ToggleAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
