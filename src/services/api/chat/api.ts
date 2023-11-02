import axios from '@/services/api/AxiosInterceptor';
import {GetChatRequest} from "@/services/types/chat/types.ts";

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
