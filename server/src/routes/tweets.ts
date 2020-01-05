// Import modules
import { Response, Request, Router } from 'express';
const router = Router();
import { check, validationResult } from 'express-validator';
// Tweeter API Setup and Config
import Twitter from 'twitter';

const twitterAPI = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string
});

// @route  GET api/tweets/?query=''
// @desc   GET tweets which related to the query keyword
// @access Public
router.get(
  '/',
  check('query', 'Please Enter the query name')
    .not()
    .isEmpty(),
  (req, res) => {
    // Check the URL params
    const errors = validationResult(req);

    // If there is error detected by checker
    if (!errors.isEmpty) {
      // Return errors message to client
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

export default router;
