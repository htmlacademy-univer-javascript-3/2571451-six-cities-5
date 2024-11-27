import { API_URL, REQUEST_TIMEOUT_MS } from '@/const';
import axios from 'axios';

export function create(
  baseURL: string = API_URL,
  timeout: number = REQUEST_TIMEOUT_MS
) {
  return axios.create({
    baseURL: baseURL,
    timeout: timeout,
  });
}
