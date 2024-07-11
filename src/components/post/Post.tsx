import React, { useState } from "react";
import {
  PostWrapper,
  PostMessageWrapper,
  PostImageSelectionWrapper,
  PostTextArea,
  PostTopWrapper,
  UserDetailWrapper,
  UserImageWrapper,
  UserDetailsWrapper,
  UserNameWrapper,
  TimeLogWrapper,
  ActionButtonWrapper,
  PostCommentIcon,
  PostCommentWrapper,
  PostCommentCount,
} from "components/post/styles";
import CommentSection from "./CommentSection";

const Post = ({ postData }: any) => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);

  const handleCommentButtonClick = () => {
    setIsCommentSectionVisible((prev) => !prev);
  };

  return (
    <PostWrapper>
      <PostTopWrapper>
        <UserDetailWrapper>
          <UserImageWrapper>
            <span className="icon-user" />
          </UserImageWrapper>
          <UserDetailsWrapper>
            <UserNameWrapper>{postData?.userName}</UserNameWrapper>
            <TimeLogWrapper>{postData?.timeStamp}</TimeLogWrapper>
          </UserDetailsWrapper>
        </UserDetailWrapper>
        <ActionButtonWrapper>
          <span className="icon-dots-three-horizontal" />
        </ActionButtonWrapper>
      </PostTopWrapper>
      <PostMessageWrapper>
        <PostImageSelectionWrapper>
          <span className="icon-smile2" />
        </PostImageSelectionWrapper>
        <PostTextArea>{postData?.postText}</PostTextArea>
      </PostMessageWrapper>
      <PostCommentWrapper
        onClick={() => {
          handleCommentButtonClick();
        }}
      >
        <PostCommentIcon>
          <span className="icon-bubble2" />
        </PostCommentIcon>
        <PostCommentCount>{postData?.commentsCount} comments</PostCommentCount>
      </PostCommentWrapper>
      {isCommentSectionVisible && postData?.commentsCount ? (
        <>
          {postData?.comments?.length &&
            postData?.comments?.map((comment: any, index: number) => {
              return <CommentSection comment={comment} index={index} />;
            })}
        </>
      ) : (
        ""
      )}
    </PostWrapper>
  );
};

export default Post;
