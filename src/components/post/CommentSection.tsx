import * as React from "react";
import {
  CommentSectionWrapper,
  CommentUserName,
  CommentUserDetails,
  CommentUserDataDetails,
  CommentUserImageWrapper,
  CommentLowerSectionWrapper,
  CommentTimeStamp,
  CommentText,
  ActionReplyWrapper,
} from "components/post/styles";

const CommentSection = ({ comment, fromChild = false, index }: any) => {
  return (
    <>
      <CommentSectionWrapper
        //adding margin to see the child tree in comments
        style={{ marginLeft: fromChild ? `${index * 8 + 8}px` : "8px" }}
      >
        <CommentUserDetails>
          <CommentUserImageWrapper>
            <span className="icon-user" />
          </CommentUserImageWrapper>
          <CommentUserDataDetails>
            <CommentUserName>{comment?.userName}</CommentUserName>
            <CommentTimeStamp>{comment?.timeStamp}</CommentTimeStamp>
          </CommentUserDataDetails>
        </CommentUserDetails>
        <CommentLowerSectionWrapper>
          <CommentText>{comment?.commentText}</CommentText>
          <ActionReplyWrapper>Reply</ActionReplyWrapper>
        </CommentLowerSectionWrapper>
      </CommentSectionWrapper>
      {comment?.children?.length ? (
        comment?.children?.map((commentData: any, newIndex: number) => {
          return (
            <CommentSection
              comment={commentData}
              fromChild
              index={index + newIndex + 1}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentSection;
