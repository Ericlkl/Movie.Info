const tweets = require('./tweets');
const movies = require('./movies');

module.exports = app => {
  app.use('/api/tweets', tweets);
  app.use('/api/movies', movies);
};
