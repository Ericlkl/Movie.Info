// Import modules
import { Response, Request, Router } from 'express';
import { check, param, validationResult } from 'express-validator';

const router = Router();
import { tmdbAPI } from '../api';
// TMDB API Manager SetUp
const api_key = process.env.TMDBAPIkey;

type SpecificRouteParams = {
  id: string;
};

// @route  GET api/movies/:id
// @desc   GET specfic movies information
// @access Public
router.get(
  '/:id',
  param('id', 'Please provide ID on URL params ')
    .not()
    .isEmpty(),
  async (req: Request<SpecificRouteParams>, res: Response) => {
    // Check the URL params
    const errors = validationResult(req);

    // If there is error detected by checker
    if (!errors.isEmpty) {
      // Return errors message to client
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Fetch Specific Movie Information from TMDB
      const result = await tmdbAPI.get(`/movie/${req.params.id}`, {
        params: {
          api_key
        }
      });

      // Send the result data back to client if success
      res.json(result.data);
    } catch (error) {
      console.error(error);
      // Send Error message back to client
      res.status(400).json({ msg: 'Server Error!' });
    }
  }
);

// Route Checker for ranking route
const rankingRouteChecker = [
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
  ])
];

// @route  GET api/movies/
// @desc   GET a list of movies by ranking type
// @access Public
router.get('/', rankingRouteChecker, async (req: Request, res: Response) => {
  // Check the URL query
  const errors = validationResult(req);

  // If there is error detected by checker
  if (!errors.isEmpty) {
    // Return errors message to client
    return res.status(400).json({ errors: errors.array() });
  }

  // Get language / ranking type from query
  const { lang, ranking_type } = req.query;

  try {
    // Fetch Movie Ranking list from TMDB
    const result = await tmdbAPI.get(`/movie/${ranking_type}`, {
      params: {
        language: lang,
        api_key
      }
    });

    // Send the result data back to client if success
    res.json(result.data.results);
  } catch (error) {
    console.error(error);
    // Send Error message back to client
    res.status(400).json({ msg: 'Server Error!' });
  }
});

export default router;
