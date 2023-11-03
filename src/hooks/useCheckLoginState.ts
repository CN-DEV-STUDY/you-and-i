import {useDispatch, useSelector} from "react-redux";
import {redirect, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "@/services/api/AxiosInstance"
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import Cookies from "js-cookie";
import {openAlertPopup} from "@/slices/popup/alertPopupSlice.ts";
import {login, logout} from "@/slices/user/loginSlice.ts";
import {RootState} from "@/store.ts";

const useCheckLoginState = () => {
  // redux
  const dispatch = useDispatch();

  // router-info
  const navigate = useNavigate();
  const location = useLocation();

  // watch
  useEffect(() => {
    // 토큰 정보를 가져온다.
    const { Authorization } = axios.defaults.headers.common || {};
    const accessToken  = Cookies.get(COOKIE_NAME.ACCESS_TOKEN);

    // 로그인 상태가 유효할 경우 : 로그인 전역상태값을 계속 유지한다.
    if (Authorization && accessToken && Authorization === accessToken) {
      dispatch(login());

      // 로그인 상태에서 다시 로그인 페이지로 진입할 경우 : 진입불가, 메인 페이지로 이동
      if (location.pathname === "/login") {
        navigate("/");
      }
    }

    // 다음 페이지에서는 체크하지 않음
    if (location.pathname === "/login" || location.pathname === "/create-account" || location.pathname === "/logout") {
      return;
    }

    // 토큰값이 존재하지 않는 경우
    if (!accessToken) {
      dispatch(logout());
      // navigate("/login")
      dispatch(
        openAlertPopup(
          {
            title: "로그인 상태가 유효하지 않습니다.",
            content: "다시 로그인 해주세요.",
            onClose: () => {
              (location.pathname !== "/login") && navigate("/login");
            }
          }
        )
      )
    }

  }, [location]);
}

export default useCheckLoginState;