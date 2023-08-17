import axios from 'axios';
import { API_BASE_URL } from './environment';

const server = axios.create({
  baseURL: API_BASE_URL,
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 403) {
      window.location.href = '/login';
    }

    return error.response;
  },
);

server.interceptors.request.use(async (config) => {
  try {
    const token = sessionStorage.getItem('access');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    /* empty */
  }

  return config;
});

export default server;
