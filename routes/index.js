const tweets = require('./tweets');

module.exports = app => {
  app.use('/api/tweets', tweets);
};
