import TopBar from "@/components/shared/TopBar.tsx";
import {Outlet} from "react-router-dom";
import BottomBar from "@/components/shared/BottomBar.tsx";
import React from "react";

const TopBottomBar = () => {
  return(
    <>
      <TopBar />
      <Outlet />
      <BottomBar />
    </>
  )
}

export default TopBottomBar;