import styled from "styled-components";

export const HomeComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

export const WelcomeText = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 33.89px;
  margin-bottom: 16px;
`;

export const WelcomeHelperText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

export const PostWrapper = styled.div`
  border: 2px solid ##35373b;
  padding: 16px;
  border-radius: 8px;
  background: #27292d;
  margin-bottom: 12px;
`;

export const PostHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  margin-bottom: 12px;
  color: #c5c7ca;
`;

export const PostMessageWrapper = styled.div`
  border-radius: 8px;
  background: #191920;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const PostImageSelectionWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27292d;
`;

export const PostInputWrapper = styled.textarea`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #7f8084;
  background: #191920;
  border: none;
  flex: 1;
  margin-left: 12px;
  &:focus {
    outline: none;
  }
`;

export const PostTextArea = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #7f8084;
  flex: 1;
  margin-left: 12px;
`;

export const PostButtonWrapper = styled.div`
  display: flex;
  align-item: centre;
  justify-content: flex-end;
  flex: 1;
`;

export const PostTopWrapper = styled.div`
  display: flex;
  align-item: centre;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 12px;
`;

export const UserDetailWrapper = styled.div`
  display: flex;
  align-item: centre;
`;

export const UserImageWrapper = styled.div`
  display: flex;
  width: 44px;
  align-items: center;
  height: 44px;
  justify-content: center;
  border-radius: 50%;
  background: #191920;
  font-size: 22px;
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: centre;
  cursor: pointer;
`;

export const UserNameWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  color: #c5c7ca;
  margin-bottom: 4px;
`;

export const TimeLogWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  color: #7f8084;
`;

export const PostCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const PostCommentIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const PostCommentCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  color: #7f8084;
`;

export const CommentSectionWrapper = styled.div`
  border-radius: 6px;
  background: #191920;
  padding: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

export const CommentUserName = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  color: #c5c7ca;
  margin-right: 6px;
`;

export const CommentTimeStamp = styled.div`
  font-size: 8px;
  font-weight: 400;
  line-height: 16px;
  color: #c5c7ca;
`;

export const CommentUserDetails = styled.div`
    display: flex;
    align-items: centre;
    margin-bottom: 6px;
}
`;

export const CommentUserDataDetails = styled.div`
    margin-left: 6px;
    display:flex;
}
`;

export const CommentText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #7f8084;
`;

export const ActionReplyWrapper = styled.div`
  font-size: 9px;
  font-weight: 400;
  line-height: 20px;
  color: #7f8084;
  cursor: pointer;
`;

export const CommentUserImageWrapper = styled.div`
  display: flex;
  width: 18px;
  align-items: center;
  height: 18px;
  justify-content: center;
  border-radius: 50%;
  background: #27292d;
  font-size: 12px;
`;

export const CommentLowerSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
