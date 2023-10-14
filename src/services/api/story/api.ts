import axios from 'axios';

interface SaveStoryRequest {

}

export const saveStoryRequest = async (data: SaveStoryRequest) => {
  const response = await axios.post('stories', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data;
}
