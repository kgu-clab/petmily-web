import axios from 'axios';
import { API_BASE_URL } from './environment';
import { parseJwtPayload } from './utils';
import dayjs from 'dayjs';

const server = axios.create({
  baseURL: API_BASE_URL,
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
    const token = sessionStorage.getItem('access');

    if (token) {
      const payload = parseJwtPayload(token);
      const expirationTime = dayjs.unix(payload.exp);
      const currentTime = dayjs();
      const diffMinutes = expirationTime.diff(currentTime, 'minute');

      if (diffMinutes <= 0) {
        const refresh = sessionStorage.getItem('refresh');

        if (refresh) {
          const rPayload = parseJwtPayload(refresh);
          const rExpirationTime = dayjs.unix(rPayload.exp);
          const rDiffMinutes = rExpirationTime.diff(currentTime, 'minute');

          if (rDiffMinutes <= 0) {
            localStorage.clear();
            window.location.href = '/';
            return;
          }

          const res = await server.get('/login/reissue', {
            headers: {
              Authorization: `Bearer ${refresh}`,
            },
          });

          if (res.data.success) {
            sessionStorage.setItem('access', res.data.data.accessToken);
            sessionStorage.setItem('refresh', res.data.data.refreshToken);
            return;
          }
        } else {
          localStorage.clear();
          window.location.href = '/';
          return;
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (e) {
    /* empty */
  }

  return config;
});

export default server;
