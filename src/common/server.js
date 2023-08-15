import axios from 'axios';

const server = axios.create({
  baseURL: 'http://49.50.172.64:8080',
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  },
);

server.interceptors.request.use(async (config) => {
  try {
    const { token } = JSON.parse(sessionStorage.getItem('session'));

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    /* empty */
  }

  return config;
});

export default server;
