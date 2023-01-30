import axios from 'axios';
import {API_URL} from "../helpers/Constants";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: false,
});

instance.interceptors.response.use(
  response => Promise.resolve(response.data),
  error => {
    if ([401, 403].includes(error?.response?.status)) {
    }
    return Promise.reject(error);
  },
);

export default instance;