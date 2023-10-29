import React from "react";
import GlobalStyles from "./Theme/GlobalStyles";
import {Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/Toaster"
import AlertPopup from "@/components/shared/AlertPopup.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store.ts";
import ConfirmPopup from "@/components/shared/ConfirmPopup.tsx";

function App() {
  const {
    showAlertPopup,
    title: alertPopupTitle,
    content: alertPopupContent,
    onClose: onAlertPopupClose
  } = useSelector((state: RootState) => state.alertPopup);

  const {
    showConfirmPopup,
    title: confirmPopupTitle,
    content: confirmPopupContent,
    onClose: onConfirmPopupClose,
    onConfirm: onConfirm
  } = useSelector((state: RootState) => state.confirmPopup);


  return (
    <>
      <GlobalStyles />
      <Toaster />
      { showAlertPopup &&
          <AlertPopup
              title={alertPopupTitle}
              content={alertPopupContent}
              onClose={onAlertPopupClose}
          />
      }
      { showConfirmPopup &&
          <ConfirmPopup
              open={showConfirmPopup}
              title={confirmPopupTitle}
              content={confirmPopupContent}
              onClose={onConfirmPopupClose}
              onConfirm={onConfirm}
          />
      }
      <Outlet />
    </>
  );
}

export default App;
