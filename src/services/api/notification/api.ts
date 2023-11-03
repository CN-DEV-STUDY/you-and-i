import axios from "@/services/api/AxiosInstance.tsx";
import {SendRelationsNoticeRequest} from "@/services/types/user/types.ts";

export const getNotifications = async () => {
  const response = await axios.get("/notices");
  return response.data;
}

export const sendRelationsNotice = async (data: SendRelationsNoticeRequest) => {
  const response = await axios.post('/notices/send', data);
  return response.data;
}

export const acceptRelations = async (noticeId: number) => {
  const response = await axios.post(`/notices/${noticeId}/accept`);
  return response.data;
}