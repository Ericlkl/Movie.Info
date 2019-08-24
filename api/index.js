// Import HTTP request sender module
const axios = require('axios');

module.exports = {
  // Create a TMDB API server manager for fetching movies data
  TMDB_API: axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  }),
  // Create a NEWSAPI server manager for fetching news data
  newsAPI: axios.create({
    baseURL: 'https://newsapi.org/v2/everything'
  })
};
