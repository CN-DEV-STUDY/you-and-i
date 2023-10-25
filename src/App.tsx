import React from "react";
import GlobalStyles from "./Theme/GlobalStyles";
import {Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/Toaster"
import AlertPopup from "@/components/shared/AlertPopup.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store.ts";

function App() {
  const {showAlertPopup, title: alertPopupTitle, content: alertPopupContent, onClose: onAlertPopupClose} = useSelector((state: RootState) => state.alertPopup);


  return (
    <>
      <GlobalStyles />
      <Toaster />
      {showAlertPopup && <AlertPopup title={alertPopupTitle} content={alertPopupContent} onClose={onAlertPopupClose}/>}
      <Outlet />
    </>
  );
}

export default App;
