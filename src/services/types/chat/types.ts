export interface GetChatRequest {
  chatRoomId: string
  email: string
}

export interface GetChatResponse {
  chatId: string
  message: string
  sender: string
  hasRead: string
  createdAt: string
}