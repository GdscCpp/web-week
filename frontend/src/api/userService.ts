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
  try{
    await axios.post<TextResponse>(API_ROUTES.LOGIN, { username, password });
    return true
  }
  catch(error){
    return false
  }
};
