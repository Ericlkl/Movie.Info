const express = require('express');
const router = express.Router();

// app.js
const Twitter = require('twitter');
const config = require('config');
const twConfig = config.get('tweeterAPI');

var twitterAPI = new Twitter(twConfig);

router.get('/', (req, res) => {
  const { query } = req.query;

  // Set up your search parameters
  var params = {
    q: query,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

  twitterAPI.get('search/tweets', params, (err, data) => {
    if (err) return console.log(err);

    res.json(data.statuses);
  });
});

module.exports = router;
