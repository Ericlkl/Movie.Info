import axios from 'axios';

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/everything'
});
