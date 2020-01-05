import { RequestHandler } from 'express';

// NEWSAPI manager Setup
import { newsAPI } from '../api';
const apiKey = process.env.NewsAPIkey;

export const getNewsByKeyword: RequestHandler = async (req, res) => {
  const { keyword } = req.query;

  try {
    // Fetch News by keyword
    const result = await newsAPI.get('/', {
      params: {
        q: keyword + ' movie',
        apiKey
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
