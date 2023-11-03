import axios from 'axios';
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import Cookies from "js-cookie";

const { VITE_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL:  VITE_BASE_URL,
  headers: {
    common: {
      Authorization: Cookies.get(COOKIE_NAME.ACCESS_TOKEN)
    }
  }
})

export default instance;
