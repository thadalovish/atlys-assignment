import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "components/post";
import Forbidden from "components/common/Forbidden";
import PostContextProvider from "context/post";

const Home = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <PostContextProvider>
            <HomeComponent />
          </PostContextProvider>
        }
      />
      <Route
        path={"/*"}
        element={
          <Forbidden
            title="Page Not Found"
            subTitle="The page you are looking for does not exist."
          />
        }
      />
    </Routes>
  );
};

export default Home;
