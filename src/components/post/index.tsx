import React from "react";
import {
  HomeComponentWrapper,
  WelcomeText,
  WelcomeHelperText,
} from "components/post/styles";
import CreatePost from "components/post/CreatePost";
import Post from "components/post/Post";
import { useAuthStateContext } from "context/auth";
import { usePostStateContext } from "context/post";

const HomeComponent = () => {
  const { userDetails } = useAuthStateContext();
  const { allPostData } = usePostStateContext();

  return (
    <HomeComponentWrapper>
      <WelcomeText>Hello {userDetails?.userName}</WelcomeText>
      <WelcomeHelperText>
        How are you doing today? Would you like to share something with the
        community 🤗
      </WelcomeHelperText>
      <CreatePost />
      {allPostData?.map((post: any) => {
        return <Post postData={post} key={post.id} />;
      })}
    </HomeComponentWrapper>
  );
};

export default HomeComponent;
