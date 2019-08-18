import axios from 'axios';

const movieAPIkey =
  'TViYzM4YjFkMjNjYmVkNCIsInN1YiI6IjVkNThhZTkyNzYxNDIxMDAxOWJmZWI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWUxlmzNa2GuFtaPK8gk5k6GH4oqXqO5ABx7ZQQUpJs';

export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: movieAPIkey
  }
});

export const newsAPI = axios;
