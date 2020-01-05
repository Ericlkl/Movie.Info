import { RequestHandler, Request, Response } from 'express';

// TMDB API Manager SetUp
import { tmdbAPI } from '../api';
const api_key = process.env.TMDBAPIkey;

type SpecificRouteParams = {
  id: string;
};

export const getMovie = async (
  req: Request<SpecificRouteParams>,
  res: Response
) => {
  try {
    // Fetch Specific Movie Information from TMDB
    const result = await tmdbAPI.get(`/movie/${req.params.id}`, {
      params: {
        api_key
      }
    });

    // Send the result data back to client if success
    res.json(result.data);
  } catch (error) {
    console.error(error);
    // Send Error message back to client
    res.status(400).json({ msg: 'Server Error!' });
  }
};

export const getMovieRank: RequestHandler = async (req, res) => {
  // Get language / ranking type from query
  const { lang, ranking_type } = req.query;

  try {
    // Fetch Movie Ranking list from TMDB
    const result = await tmdbAPI.get(`/movie/${ranking_type}`, {
      params: {
        language: lang,
        api_key
      }
    });

    // Send the result data back to client if success
    res.json(result.data.results);
  } catch (error) {
    console.error(error);
    // Send Error message back to client
    res.status(400).json({ msg: 'Server Error!' });
  }
};

export const searchMovie: RequestHandler = async (req, res) => {
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
};
