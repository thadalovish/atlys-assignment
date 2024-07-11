import React from "react";
import {
  HomeComponentWrapper,
  WelcomeText,
  WelcomeHelperText,
} from "components/post/styles";
import CreatePost from "components/post/CreatePost";
import Post from "components/post/Post";
import { useAuthStateContext } from "context/auth";
import { postData } from "components/post/constant";

const HomeComponent = () => {
  const { userDetails } = useAuthStateContext();
  return (
    <HomeComponentWrapper>
      <WelcomeText>Hello {userDetails?.userName}</WelcomeText>
      <WelcomeHelperText>
        How are you doing today? Would you like to share something with the
        community 🤗
      </WelcomeHelperText>
      <CreatePost />
      {postData?.map((post) => {
        return <Post postData={post} key={post.id} />;
      })}
    </HomeComponentWrapper>
  );
};

export default HomeComponent;
