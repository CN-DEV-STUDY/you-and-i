import TopBar from "@/components/shared/TopBar.tsx";
import {Outlet} from "react-router-dom";
import BottomBar from "@/components/shared/BottomBar.tsx";
import MuiModal from "@/components/MuiModal.tsx";
import React from "react";
import {ModalDialogProps} from "@mui/joy";

const BottomBarOnly = () => {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);

  return (
    <>
      <Outlet />
      <BottomBar setLayout={setLayout} />
      {layout === "fullscreen" && (
        <MuiModal layout={layout} setLayout={setLayout} />
      )}
    </>
  );
}

export default BottomBarOnly;