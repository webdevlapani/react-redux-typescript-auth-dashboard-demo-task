import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from '../router/Routes';

/**
 * Axios Instance
 */
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

/**
 * Interceptors for axios request it will send Authorization token
 */
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

/**
 * Interceptors for axios response it will check for 401 and 403 status before taking any decision
 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem('accessToken');
      history.push('/login');
    }
  }
);

export default instance;
