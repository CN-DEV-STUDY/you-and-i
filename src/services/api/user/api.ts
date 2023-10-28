import axios from '@/services/api/AxiosInterceptor';
import {LoginRequest, SaveUserRequest, FindUserRequest} from "@/services/types/user/types.ts";

export const saveUserRequest = async (data: SaveUserRequest) => {
  const response = await axios.post('/users', data);
  return response.data;
}

export const loginRequest = async (data: LoginRequest) => {
  const response = await axios.post('/login', data);
  return response.data;
}

export const findUserRequest = async (data: FindUserRequest) => {
  const queryString = new URLSearchParams(data.toString());
  const response = await axios.get(`/users/search?${queryString}`);
  return response.data.data;
}