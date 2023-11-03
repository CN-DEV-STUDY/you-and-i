import axios from "@/services/api/AxiosInstance"
import {AxiosError, AxiosResponse} from "axios";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {useDispatch} from "react-redux";

/**
 * @description 비동기 인터셉터 훅
 * @see [https://axios-http.com/kr/docs/interceptors]
 */
const useAsyncInterceptors = () => {
  const dispatch = useDispatch();

  // request 인터셉터
  const requestInterceptor = axios.interceptors.request.use(
    (config) => {
      const accessToken = Cookies.get(COOKIE_NAME.ACCESS_TOKEN);

      try {
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      } catch (err) {
        console.error("[_axios.interceptors.request] config : " + err);
      }
      return config;
    },
    (error: AxiosError) => {
      console.error("[_axios.interceptors.request] error : " + error);
      return Promise.reject(error);
    }
  )

  // response 인터셉터
  const responseInterceptor = axios.interceptors.response.use(
    (response: AxiosResponse) => {
      // 응답에 대한 유효성 검사 로직 구현

      return response.data;
    },
    (error: AxiosError) => {
      console.error("[_axios.interceptors.response] error : " + error);
      return Promise.reject(error);
    }
  )

  axios.interceptors.request.eject(requestInterceptor);
  axios.interceptors.response.eject(responseInterceptor);
}

export default useAsyncInterceptors;