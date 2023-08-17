import server from './server';

export const postLogin = async (payload) => {
  const res = await server.post(`/login`, payload);
  return res.data.data;
};

export const postUsers = async (payload) => {
  const res = await server.post(`/users`, payload);
  return res.data.data;
};

export const postSendVerificationCode = async (payload) => {
  const res = await server.post(`/sms/send-verification-code`, payload);
  return res.data.data;
};

export const postVerificationCode = async (payload) => {
  const res = await server.post(`/sms/verify`, payload);
  return res.data.data;
};

export const getMyInfo = async () => {
  const res = await server.get(`/users/my-info`);
  return res.data.data;
};

export const postAdoptionBoard = async (payload) => {
  const res = await server.post(`/adoption-boards`, payload);
  return res.data;
};

export const getAdoptionBoards = async (type) => {
  const res = await server.get(`/adoption-boards/search?userType=${type}`);
  return res.data.data;
};

export const getAdoptionBoardsInfo = async (id) => {
  const res = await server.get(`/adoption-boards/info?boardId=${id}`);
  return res.data.data;
};

export const getMyBoard = async () => {
  const res = await server.get(`/adoption-boards/my-board`);
  return res.data.data;
};

export const postAdoptionRequestsApprove = async (id) => {
  const res = await server.post(`/adoption-requests/approve?requestId=${id}`);
  return res.data.data;
};

export const getMyRequests = async () => {
  const res = await server.get(`/adoption-requests/my-request`);
  return res.data.data;
};

export const postContracts = async (payload) => {
  const res = await server.post(`/contracts`, payload);
  return res.data.data;
};
