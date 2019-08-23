const tweets = require('./tweets');
const movies = require('./movies');
const news = require('./news');
const search = require('./search');

module.exports = app => {
  app.use('/api/tweets', tweets);
  app.use('/api/movies', movies);
  app.use('/api/news', news);
  app.use('/api/search', search);
};
