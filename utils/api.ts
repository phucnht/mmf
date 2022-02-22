import { toast } from 'react-toastify';
import axios, { AxiosInstance } from 'axios';
import { stringify } from 'query-string';
import { store } from 'store/store';
import { logout } from '../store/account/auth/auth.slice';

export const client = (baseURL?: string): AxiosInstance => {
  if (!baseURL) {
    throw new Error(`The connection to ${baseURL} has a problem...`);
  }

  const instance = axios.create({
    baseURL,
    paramsSerializer: params => stringify(params, { arrayFormat: 'index' })
  });

  instance.interceptors.request.use(
    config => {
      const { accessToken } = store.getState().auth.data;

      if (config.headers) {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        config.headers['Content-Type'] = 'application/json';
      }

      if (config.url) {
        config.url = (config.url.includes(baseURL) ? '' : baseURL) + config.url;
      }

      return config;
    },
    err => Promise.reject(err)
  );

  [instance].forEach(item => {
    item.interceptors.response.use(
      ({ data: response }) => {
        const { success = true, data, errors } = response;
        if (success) return data;
        return Promise.reject(errors);
      },
      ({ response }) => {
        if (response) {
          const { status, statusText } = response;

          if (status === 401) {
            logout();
          } else {
            toast.error(`${status} - ${statusText}`);
          }
        } else {
          toast.error('Cannot connect to Server');
        }
        return Promise.reject(response);
      }
    );
  });

  return instance;
};

export const clientMarket = client(process.env.NEXT_PUBLIC_API_MARKET);
export const clientAccount = client(process.env.NEXT_PUBLIC_API_ACCOUNT);
