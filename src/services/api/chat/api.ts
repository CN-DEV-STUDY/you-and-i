import axios from '@/services/api/AxiosInstance.tsx';
import {GetChatRequest} from "@/services/types/chat/types.ts";

export const getConnectionId = async (email:string) => {
  const response = await axios.get("/chats/connection-id", {
    params: {
      email: email,
    }
  });
  return response.data;
}

export const getChats = async (data: GetChatRequest) => {
  const response = await axios.get("/chats", {
    params: {
      email: data.email,
      page: 0,
      size: 20,
    }
  });
  return response.data;
}
