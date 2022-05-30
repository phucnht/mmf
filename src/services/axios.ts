import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { API_URI } from 'env';
import { store } from 'reducers/store';
import { ProfileState, signOut } from 'reducers/profileSlice';

const beforeRequest = (config: AxiosRequestConfig) => {
  const { isLoggedIn, accessToken }: ProfileState = store.getState().profile;
  if (isLoggedIn) {
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
  }
  try {
    if (config.data instanceof FormData) {
      Object.assign(config.headers, { 'Content-Type': 'multipart/form-data' });
    }
  } catch {}
  return config;
};

const onError = async (error: AxiosError) => {
  const { response } = error;
  if (response) {
    const { status } = response;
    if (status === 401) {
      store.dispatch(signOut());
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

const client = axios.create({ baseURL: API_URI });
client.interceptors.request.use(beforeRequest);
client.interceptors.response.use(({ data }) => data.data, onError);

export { client };
