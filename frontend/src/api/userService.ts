import axios from 'axios';

enum API_ROUTES {
  LOGIN = 'http://localhost:8000/login',
}
enum HTTPCODES {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
}

interface TextResponse {
  response: string;
}

export const login = async (username: string, password: string) => {
  const req = await axios.post<TextResponse>(API_ROUTES.LOGIN, { username, password });
  if (req.status == HTTPCODES.SUCCESS) {
    return true;
  }
  return false;
};
