import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

let accessToken = '';

export function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.authorization) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;

    if (error.response.status === 403 && !prevRequest.sent) {
      const { data } = await axiosInstance.get('/auth/refreshTokens');

      setAccessToken(data.data.accessToken);

      prevRequest.sent = true;

      prevRequest.headers.authorization = `Bearer ${accessToken}`;

      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  }
);
