import axios from "axios";
import {GetChatRequest, GetChatResponse} from "@/services/types/chat/types.ts";

export const saveUserRequest = async (data: GetChatRequest) => {
  const response = await axios.get("/chats", {
    params: {
      chatRoomId: data.chatRoomId,
      email: data.email
    }
  });
  return response.data;
}
