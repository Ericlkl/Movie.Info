import axios from 'axios';
export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/everything'
});
