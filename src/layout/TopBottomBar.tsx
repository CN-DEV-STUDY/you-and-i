import TopBar from "@/components/shared/TopBar.tsx";
import {Outlet} from "react-router-dom";
import BottomBar from "@/components/shared/BottomBar.tsx";
import React from "react";

const TopBottomBar = () => {
  return(
    <div className="max-w-sm mx-auto h-screen bg-[--color__primary]">
      <TopBar />
      <Outlet />
      <BottomBar />
    </div>
  )
}

export default TopBottomBar;