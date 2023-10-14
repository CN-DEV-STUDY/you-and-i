import axios from 'axios';
interface SaveUserRequest {
  email: string,
  password: string,
  name: string,
  nickname: string,
}

export const saveUserRequest = async (data: SaveUserRequest) => {
  const response = await axios.post('/users', data);
  return response.data;
}