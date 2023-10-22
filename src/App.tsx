import React from "react";
import GlobalStyles from "./Theme/GlobalStyles";
import BottomBar from "./components/shared/BottomBar";
import { Outlet } from "react-router-dom";
import MuiModal from "./components/MuiModal";
import { ModalDialogProps } from "@mui/joy";
import TopBar from "@/components/shared/TopBar.tsx";

function App() {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);

  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Outlet />
      <BottomBar setLayout={setLayout} />
      {layout === "fullscreen" && (
        <MuiModal layout={layout} setLayout={setLayout} />
      )}
    </>
  );
}

export default App;
