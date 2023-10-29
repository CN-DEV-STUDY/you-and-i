import axios from '@/services/api/AxiosInterceptor';
import {LoginRequest, SaveUserRequest, SetUserRelationShipRequest } from "@/services/types/user/types.ts";

export const saveUserRequest = async (data: SaveUserRequest) => {
  const response = await axios.post('/users', data);
  return response.data;
}

export const loginRequest = async (data: LoginRequest) => {
  const response = await axios.post('/login', data);
  return response.data;
}

export const relationShipRequest = async (data: SetUserRelationShipRequest) => {
  const response = await axios.post('/users/relations', data);
  return response.data;
}