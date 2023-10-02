import axios from 'axios';

const instance = axios.create({
  headers: {
    'content-type': 'multipart/form-data',
  },
});

export const upload = async (data: File) => {
  try {
    await instance.postForm('http://localhost:8000/upload', { resume: data });
    return true;
  } catch(error) {
    return false;
  }
};


