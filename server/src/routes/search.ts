// Import modules
import { Router } from 'express';
const router = Router();

// Middlewares
import { searchMovieRouteChecker } from '../middlewares';
// Controllers
import { searchMovie } from '../controllers/movies';

// @route  GET api/search/movie/?name=''
// @desc   GET movies list by keyword
// @access Public
router.get('/movie/', searchMovieRouteChecker, searchMovie);

export default router;
