import axios from 'axios';
import { API_URL } from '@config';

export const HttpRequest = axios.create({
  baseURL: API_URL,
});
