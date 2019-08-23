const express = require('express');
const router = express.Router();

const config = require('config');
const TMDBAPIkey = config.get('TMDBAPIkey');

const TMDB_API = require('../api').TMDB_API;

router.get('/:id', async (req, res) => {
  try {
    const result = await TMDB_API.get(`/movie/${req.params.id}`, {
      params: {
        api_key: TMDBAPIkey
      }
    });
    res.json(result.data);
  } catch (error) {
    console.error(error);
  }
});

router.get('/', async (req, res) => {
  const { lang, ranking_type } = req.query;
  try {
    const result = await TMDB_API.get(`/movie/${ranking_type}`, {
      params: {
        language: lang,
        api_key: TMDBAPIkey
      }
    });
    res.json(result.data.results);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
