// Import modules
import { Router } from 'express';

// Middlewares
import { movieRouteChecker, rankingRouteChecker } from '../middlewares';
// Controllers
import { getMovie, getMovieRank } from '../controllers/movies';

const router = Router();

// @route  GET api/movies/:id
// @desc   GET specfic movies information
// @access Public
router.get('/:id', movieRouteChecker, getMovie);

// @route  GET api/movies/
// @desc   GET a list of movies by ranking type
// @access Public
router.get('/', rankingRouteChecker, getMovieRank);

export default router;
