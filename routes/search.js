const express = require('express');
const router = express.Router();

const config = require('config');
const TMDBAPIkey = config.get('TMDBAPIkey');

const TMDB_API = require('../api').TMDB_API;

router.get('/movie/', async (req, res) => {
  const { name } = req.query;
  try {
    const result = await TMDB_API.get(`/search/movie`, {
      params: {
        query: name,
        api_key: TMDBAPIkey
      }
    });
    res.json(result.data.results);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
