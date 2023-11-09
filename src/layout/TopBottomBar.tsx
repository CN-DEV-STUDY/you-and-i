import TopBar from "@/components/shared/TopBar.tsx";
import {Outlet} from "react-router-dom";
import BottomBar from "@/components/shared/BottomBar.tsx";
import React from "react";

const TopBottomBar = () => {
  return(
    <div className="w-96 mx-auto">
      <TopBar />
      <Outlet />
      <BottomBar />
    </div>
  )
}

export default TopBottomBar;