import axios from '@/services/api/AxiosInstance.tsx';
import {GetChatRequest} from "@/services/types/chat/types.ts";

export const getConnectionId = async (email:string) => {
  const {data} = await axios.get("/chats/connection-id", {
    params: {
      email: email,
    }
  });
  return data.data;
}

export const getChats = async (params: GetChatRequest) => {
  const {data} = await axios.get("/chats", {
    params: {
      email: params.email,
      page: 0,
      size: 20,
    }
  });
  return data.data;
}
