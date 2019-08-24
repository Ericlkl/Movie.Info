// Import Modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// NEWSAPI manager Setup
const config = require('config');
const { newsAPI } = require('../api/index');
const NewsAPIkey = config.get('NewsAPIkey');

// @route  GET api/news/?keyword=""
// @desc   GET a list of news by keyword
// @access Public
router.get(
  '/',
  check('keyword', 'Please Enter keyword for searching news !')
    .not()
    .isEmpty(),
  async (req, res) => {
    // Check the URL query
    const errors = validationResult(req);

    // If there is error detected by checker
    if (!errors.isEmpty()) {
      // Return errors message to client
      return res.status(400).json({ errors: errors.array() });
    }

    const { keyword } = req.query;

    try {
      // Fetch News by keyword
      const result = await newsAPI.get('/', {
        params: {
          q: keyword,
          from: '2019-07-23',
          sortBy: 'publishedAt',
          apiKey: NewsAPIkey
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

module.exports = router;
