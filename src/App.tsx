import React from "react";
import GlobalStyles from "./Theme/GlobalStyles";
import {Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/Toaster"

function App() {
  // const [layout, setLayout] = React.useState<
  //   ModalDialogProps["layout"] | undefined
  // >(undefined);


  return (
    <>
      <GlobalStyles />
      <Toaster />
      <Outlet />
      {/*{layout === "fullscreen" && (*/}
      {/*  <MuiModal layout={layout} setLayout={setLayout} />*/}
      {/*)}*/}
    </>
  );
}

export default App;
