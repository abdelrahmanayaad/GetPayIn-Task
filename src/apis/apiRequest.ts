import axios from 'axios';
import { BASE_URL } from '../utils/constants';
const apiRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiRequest.interceptors.request.use(
  config => {
    // const token = store.getState().auth.token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error),
);

apiRequest.interceptors.response.use(
  response => response,
  error => {
    // if (error.response?.status === 401) {
    //   store.dispatch({ type: 'auth/logout' });
    // }
    return Promise.reject(error);
  },
);

export default apiRequest;
