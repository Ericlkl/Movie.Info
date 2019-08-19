import axios from 'axios';

export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/everything'
  // params: {
  //   from: '2019-07-19',
  //   sortBy: 'published',
  //   apiKey: NewsAPIkey
  // }
});
