import axios from 'axios';

const instance = axios.create({
  headers: {
    'content-type': 'multipart/form-data',
  },
});

export const upload = async (data: File, user: string) => {
  try {
    const formData = new FormData();

    formData.append('user', user);
    formData.append('resume', data);

    await instance.postForm('http://localhost:8000/upload', formData);
    return true;
  } catch (error) {
    return false;
  }
};
