import React from "react";
import "./App.css";
import GlobalStyles from "./Theme/GlobalStyles";
import BottomBar from "./components/shared/BottomBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
      <BottomBar />
    </>
  );
}

export default App;
