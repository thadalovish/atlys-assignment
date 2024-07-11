import * as React from "react";
import {
  PostWrapper,
  PostHeading,
  PostMessageWrapper,
  PostImageSelectionWrapper,
  PostInputWrapper,
  PostButtonWrapper,
} from "components/post/styles";
import Button from "components/common/style-components/Button";

const CreatePost = () => {
  return (
    <PostWrapper>
      <PostHeading>Create post</PostHeading>
      <PostMessageWrapper>
        <PostImageSelectionWrapper>
          <span className="icon-bubble2"></span>
        </PostImageSelectionWrapper>
        <PostInputWrapper
          placeholder="How are you feeling today?"
          rows={1}
        ></PostInputWrapper>
      </PostMessageWrapper>
      <PostButtonWrapper>
        <Button
          type="submit"
          value="Submit"
          style={{
            width: "111px",
            height: "43px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "19.36px",
            borderRadius: "4px",
          }}
        >
          Post
        </Button>
      </PostButtonWrapper>
    </PostWrapper>
  );
};

export default CreatePost;
