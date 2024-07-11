import React, { useState } from "react";
import {
  PostWrapper,
  PostHeading,
  PostMessageWrapper,
  PostImageSelectionWrapper,
  PostInputWrapper,
  PostButtonWrapper,
} from "components/post/styles";
import Button from "components/common/style-components/Button";
import { handleCreatePost } from "context/post/reducer";
import { usePostDispatchContext } from "context/post";
import { useAuthDispatchContext, useAuthStateContext } from "context/auth";
import { handleAuthModalToggle } from "context/auth/reducer";

const CreatePost = () => {
  const dispatch = usePostDispatchContext();
  const authDispatch = useAuthDispatchContext();
  const { userDetails, isLogin } = useAuthStateContext();
  const [postText, setPostText] = useState("");

  const handlePostCreation = () => {
    if (!isLogin) {
      authDispatch(handleAuthModalToggle(true));
    } else {
      dispatch(
        handleCreatePost({
          id: Math.random() * 100,
          userName: userDetails.userName,
          timeStamp: "Just Now",
          postText: postText,
          commentsCount: 0,
          comments: [],
        })
      );
      setPostText("");
    }
  };

  const createPostButtonDisabled = !isLogin
    ? false
    : postText === ""
      ? true
      : false;

  return (
    <PostWrapper>
      <PostHeading>Create post</PostHeading>
      <PostMessageWrapper>
        <PostImageSelectionWrapper>
          <span className="icon-bubble2"></span>
        </PostImageSelectionWrapper>
        <PostInputWrapper
          value={postText}
          placeholder="How are you feeling today?"
          rows={1}
          onChange={(e: any) => {
            setPostText(e.target.value);
          }}
        ></PostInputWrapper>
      </PostMessageWrapper>
      <PostButtonWrapper>
        <Button
          type="submit"
          value="Submit"
          disabled={createPostButtonDisabled}
          style={{
            width: "111px",
            height: "43px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "19.36px",
            borderRadius: "4px",
          }}
          handleClick={handlePostCreation}
        >
          Post
        </Button>
      </PostButtonWrapper>
    </PostWrapper>
  );
};

export default CreatePost;
