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
}
