import axios from 'axios';
import { useEffect } from 'react'
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import Cookies from "js-cookie";
import {useDispatch} from "react-redux";
import {openAlertPopup} from "@/slices/popup/alertPopupSlice.ts";

const { VITE_BASE_URL } = import.meta.env;

type Props = {
  children: React.ReactNode;
}

const instance = axios.create({
  baseURL:  VITE_BASE_URL,
})

const AxiosInterceptor = ({ children }: Props) => {
  const dispatch = useDispatch();

  instance.interceptors.request.use(
    (request) => {
      // Edit request config
      const accessToken = Cookies.get(COOKIE_NAME.ACCESS_TOKEN);

      try {
        if (accessToken) {
          request.headers["authorization"] = `Bearer ${accessToken}`;
        }
        return request;
      } catch (err) {
        console.error("[_axios.interceptors.request] config : " + err);
      }
      return request;
    },
    (error) => {
      console.log("error", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // Edit response config
      return response;
    },
    (error) => {
      const {code, response} = error;
      dispatch(openAlertPopup({title: "로그인 실패", content: response.data.message}));
      return Promise.reject(error);
    }
  );

  return children;
}

export default instance;
export { AxiosInterceptor };