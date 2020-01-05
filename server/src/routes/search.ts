// Import modules
import { Response, Request, Router } from 'express';
const router = Router();
import { check, validationResult } from 'express-validator';

import { tmdbAPI } from '../api';
// TMDB API manager Setup
const api_key = process.env.TMDBAPIkey;

// @route  GET api/search/movie/?name=''
// @desc   GET movies list by keyword
// @access Public
router.get(
  '/movie/',
  check('name', 'Please insert movie name')
    .not()
    .isEmpty(),
  async (req, res) => {
    // Check URL Query
    const errors = validationResult(req);

    // If There is error
    if (!errors.isEmpty()) {
      // Send error message back to client
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.query;

    try {
      // Fetch Movies by name
      const result = await tmdbAPI.get(`/search/movie`, {
        params: {
          query: name,
          api_key
        }
      });
      // Send data back to client if success
      res.json(result.data.results);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Server Error' });
    }
  }
);

export default router;
