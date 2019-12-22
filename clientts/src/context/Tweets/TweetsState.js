import axios from 'axios';
import React, { useReducer } from 'react';

import TweetsContext from './TweetsContext';
import TweetsReducer from './TweetsReducer';
import { FETCH_TWEETS, CLEAR_TWEETS } from '../action';

const initState = {
  tweets: [],
  isloading: true
};

const TweetsState = props => {
  const [state, dispatch] = useReducer(TweetsReducer, initState);

  const fetchTweets = async movie => {
    // Try to fetch the tweets from server
    try {
      // If success, save it to global state
      const res = await axios.get('/api/tweets', {
        params: {
          query: movie
        }
      });

      dispatch({ type: FETCH_TWEETS, payload: res.data });
    } catch (error) {
      // Print error to console when failt to fetch tweets
      console.log(error.message);
    }
  };

  const clearTweets = () => dispatch({ type: CLEAR_TWEETS });

  return (
    <TweetsContext.Provider
      value={{
        tweets: state.tweets,
        isloading: state.isloading,
        fetchTweets,
        clearTweets
      }}
    >
      {props.children}
    </TweetsContext.Provider>
  );
};

export default TweetsState;
