export const COOKIE_NAME = {
  ACCESS_TOKEN : "ACCESS_TOKEN",
  EMAIL: "EMAIL",
  CHAT_ROOM_ID: "CHAT_ROOM_ID",
} as const;
export type COOKIE_NAME = typeof COOKIE_NAME[keyof typeof COOKIE_NAME];

export interface Jwt {
  exp: number;
  iat: number;
  sub: string;
  id: number;
  iss: string;
}
export interface SaveUserRequest {
  email: string,
  password: string,
  name: string,
  nickname: string,
}

export interface LoginRequest {
  email: string,
  password: string,
  rememberMe: boolean,
}

export interface SearchUserResponse {
  nickname: string
  email: string
}

export interface SetUserRelationShipRequest {
  myEmail: string,
  yourEmail: string,
}

export interface SendRelationsNoticeRequest {
  sender: string,
  receiver: string,
}