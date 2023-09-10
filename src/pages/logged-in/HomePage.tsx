import Period from "../../components/Period";
import Recent from "../../components/Recent";
import Plan from "../../components/Plan";
import Story from "../../components/Story";
import React from "react";
import TopBar from "../../components/shared/TopBar";
import { useAuth } from "@clerk/clerk-react";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Period />
      <Recent />
      <Plan />
      <Story />
    </>
  );
};

export default HomePage;
