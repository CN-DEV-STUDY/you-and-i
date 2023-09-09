import React from "react";
import "./App.css";
import TopBar from "./components/shared/TopBar";
import GlobalStyles from "./Theme/GlobalStyles";
import Recent from "./components/Recent";
import Plan from "./components/Plan";
import Story from "./components/Story";
import BottomBar from "./components/shared/BottomBar";

function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Recent />
      <Plan />
      <Story />
      <BottomBar />
    </>
  );
}

export default App;
