import axiosModule from 'axios';
import { BASE_URL } from './constants';

export const axios = axiosModule.create({
  baseURL: BASE_URL,
});
