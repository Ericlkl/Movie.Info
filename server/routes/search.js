// Import Modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// TMDB API manager Setup
const config = require('config');
const TMDBAPIkey = config.get('TMDBAPIkey');
const TMDB_API = require('../api').TMDB_API;

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
      const result = await TMDB_API.get(`/search/movie`, {
        params: {
          query: name,
          api_key: TMDBAPIkey
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

module.exports = router;
