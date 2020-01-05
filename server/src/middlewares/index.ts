import { RequestHandler } from 'express';
import { check, param, validationResult } from 'express-validator';

export const paramsChecker: RequestHandler = (req, res, next) => {
  // Check the URL params
  const errors = validationResult(req);

  // If there is error detected by checker
  if (!errors.isEmpty) {
    // Return errors message to client
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export const movieRouteChecker = [
  param('id', 'Please provide ID on URL params ')
    .not()
    .isEmpty(),
  paramsChecker
];

// Route Checker for ranking route
export const rankingRouteChecker = [
  check('lang')
    .not()
    .isEmpty(),
  check('lang').isIn(['en', 'zh', 'fr', 'de', 'it', 'jp']),
  check('ranking_type')
    .not()
    .isEmpty(),
  check('ranking_type').isIn([
    'upcoming',
    'now_playing',
    'top_rated',
    'popular'
  ]),
  paramsChecker
];

export const searchMovieRouteChecker = [
  check('name', 'Please insert movie name')
    .not()
    .isEmpty(),
  paramsChecker
];

export const getNewsRouteChecker = [
  check('keyword', 'Please Enter keyword for searching news !')
    .not()
    .isEmpty(),
  paramsChecker
];

export const getTweetsRouteChecker = [
  check('query', 'Please Enter the query name')
    .not()
    .isEmpty(),
  paramsChecker
];
