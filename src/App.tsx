import React from "react";
import "./App.css";
import Topbar from "./components/shared/Topbar";
import GlobalStyles from "./Theme/GlobalStyles";
import Recent from "./components/Recent";
import Plan from "./components/Plan";

function App() {
  return (
    <>
      <GlobalStyles />
      <Topbar />
      <Recent description="" />
      <Plan />
      <div>YouAndI</div>
    </>
  );
}

export default App;
