import { RequestHandler } from 'express';

// Tweeter API Setup and Config
import Twitter from 'twitter';

const twitterAPI = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string
});

export const getTweetsByKeyword: RequestHandler = (req, res) => {
  // Get query string value from URL query
  const { query } = req.query;

  // Set up Search parameters
  const params = {
    q: query,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

  // Fetch tweets
  twitterAPI.get('search/tweets', params, (err, data) => {
    // If fetch tweets fail
    if (err) {
      console.log(err);
      return res.status(400).send({ msg: 'Server Error!' });
    }

    // If fetch tweets success, send result back to the client
    // Datatype: Array[Object]
    res.json(data.statuses);
  });
};
