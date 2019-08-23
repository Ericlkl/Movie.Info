const tweets = require('./tweets');
const movies = require('./movies');
const news = require('./news');

module.exports = app => {
  app.use('/api/tweets', tweets);
  app.use('/api/movies', movies);
  app.use('/api/news', news);
};
