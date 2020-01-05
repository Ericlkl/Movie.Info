// Import modules
import { Router } from 'express';
const router = Router();

// Middlewares
import { getNewsRouteChecker } from '../middlewares';
// Controllers
import { getNewsByKeyword } from '../controllers/news';

// @route  GET api/news/?keyword=""
// @desc   GET a list of news by keyword
// @access Public
router.get('/', getNewsRouteChecker, getNewsByKeyword);

export default router;
