// Import HTTP request sender module
import axios from 'axios';
// Create a TMDB API server manager for fetching movies data
export const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});
// Create a NEWSAPI server manager for fetching news data
export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/everything'
});
