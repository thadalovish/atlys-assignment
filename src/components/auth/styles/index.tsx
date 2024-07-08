import styled from "styled-components";

interface StyledAuthHeadingProps {
  light?: boolean;
}

export const AuthStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 463px;
  background: #27292d;
  border-radius: 8px;
  border: 2px solid #35373b;
  padding: 48px 24px;
`;

export const ChangeFormText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  display: flex;
  align-items: center;
      margin-left: 24px;
    flex: 1;
    width: 100%;
}
`;

export const HighlightText = styled.div`
  color: white;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: centre;
`;

export const TwoFiledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CursorForText = styled.div`
  cursor: pointer;
`;

export const FieldHelperText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
  color: #c5c7ca;
  margin-bottom: 6px;
`;

export const AuthSubHeading = styled.div<StyledAuthHeadingProps>`
  ${({ light }) => `font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  color: ${!light ? "#fff" : ""};
  margin-bottom: 8px`};
`;
export const FieldWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;
  margin-bottom: 16px;
`;

export const AuthHeading = styled.div<StyledAuthHeadingProps>`
  font-size: 18px;
  font-weight: 600;
  line-height: 21.78px;
  color: #fff;
  margin-bottom: 46px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
