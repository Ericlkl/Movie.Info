// Import modules
import { Router } from 'express';
const router = Router();

// Controllers
import { getTweetsByKeyword } from '../controllers/tweets';
// Middlewares
import { getTweetsRouteChecker } from '../middlewares';
// @route  GET api/tweets/?query=''
// @desc   GET tweets which related to the query keyword
// @access Public
router.get('/', getTweetsRouteChecker, getTweetsByKeyword);

export default router;
