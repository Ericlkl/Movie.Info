const express = require('express');
const router = express.Router();
const config = require('config');
const { newsAPI } = require('../api/index');
const NewsAPIkey = config.get('NewsAPIkey');

router.get('/', async (req, res) => {
  const { keyword } = req.query;

  const result = await newsAPI.get('/', {
    params: {
      q: keyword,
      from: '2019-07-23',
      sortBy: 'publishedAt',
      apiKey: NewsAPIkey
    }
  });

  res.json(result.data);
});

module.exports = router;
