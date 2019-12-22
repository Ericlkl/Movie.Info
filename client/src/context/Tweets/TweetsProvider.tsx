import axios from 'axios';
import React, { useReducer } from 'react';

import TweetsContext, { initialState } from './TweetsContext';
import TweetsReducer from './TweetsReducer';
import { TweetsAction } from '../action';

const TweetsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TweetsReducer, initialState);

  const fetchTweets = async (movie: string) => {
    // Try to fetch the tweets from server
    try {
      // If success, save it to global state
      const res = await axios.get('/api/tweets', {
        params: {
          query: movie
        }
      });

      dispatch({ type: TweetsAction.FETCH_TWEETS, payload: res.data });
    } catch (error) {
      // Print error to console when failt to fetch tweets
      console.log(error.message);
    }
  };

  const clearTweets = () => dispatch({ type: TweetsAction.CLEAR_TWEETS });

  return (
    <TweetsContext.Provider
      value={{
        tweets: state.tweets,
        isloading: state.isloading,
        fetchTweets,
        clearTweets
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;
