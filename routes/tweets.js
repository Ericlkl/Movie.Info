const express = require('express');
const router = express.Router();

// app.js
const Twitter = require('twitter');
const config = require('../config/');

var twitterAPI = new Twitter(config);

router.post('/', (req, res) => {
  const { query } = req.body;

  // Set up your search parameters
  var params = {
    q: `#${query}`,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

  twitterAPI.get('search/tweets', params, (err, data, response) => {
    if (err) return console.log(err);
    console.log(data);

    res.json(data);
  });
});

module.exports = router;
