import server from './server';

export const postLogin = async (payload) => {
  const res = await server.post(`/login`, payload);
  return res.data.data;
};
