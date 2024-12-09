import { API_URL, REQUEST_TIMEOUT_MS } from '@/const';
import { getToken } from '@/storage/token';
import axios, { InternalAxiosRequestConfig } from 'axios';

export function create(
  baseURL: string = API_URL,
  timeout: number = REQUEST_TIMEOUT_MS
) {
  const api = axios.create({
    baseURL: baseURL,
    timeout: timeout,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
}
