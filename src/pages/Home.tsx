import React from "react";
import HomeComponent from "components/post";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomeComponent />} />
    </Routes>
  );
};

export default Home;
