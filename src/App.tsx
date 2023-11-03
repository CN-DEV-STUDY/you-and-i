import React, {useEffect} from "react";
import GlobalStyles from "./Theme/GlobalStyles";
import {Outlet, redirect, useNavigate} from "react-router-dom";
import {Toaster} from "@/components/ui/Toaster"
import AlertPopup from "@/components/shared/AlertPopup.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store.ts";
import ConfirmPopup from "@/components/shared/ConfirmPopup.tsx";
import useCheckLoginState from "@/hooks/useCheckLoginState.ts";
import useAsyncInterceptors from "@/hooks/useAsyncInterceptors.ts";

/**
 * @description App 컴포넌트
 */
function App() {
  useAsyncInterceptors();
  useCheckLoginState();

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
