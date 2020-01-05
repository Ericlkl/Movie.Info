import { Application } from 'express';
// Import API routers
import tweets from './tweets';
import movies from './movies';
import news from './news';
import search from './search';

// Export a function that plug all the api routes
module.exports = (app: Application) => {
  app.use('/api/tweets', tweets);
  app.use('/api/movies', movies);
  app.use('/api/news', news);
  app.use('/api/search', search);
};
