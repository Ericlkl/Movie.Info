const axios = require('axios');

module.exports = {
  TMDB_API: axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  }),
  newsAPI: axios.create({
    baseURL: 'https://newsapi.org/v2/everything'
  })
};
