import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.floatrates.com/daily',
});

export default api;
