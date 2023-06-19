import axios from 'axios'
import { baseUrl } from './Constants/contants'
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance;