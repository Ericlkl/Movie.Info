import React, { useReducer } from 'react';
import TweetsContext from './TweetsContext';
import TweetsReducer from './TweetsReducer';
import { twit } from '../../api/index';
import { FETCH_TWEETS, CLEAR_TWEETS } from '../action';

const initState = {
  tweets: [],
  isloading: true
};

const TweetsState = props => {
  const [state, dispatch] = useReducer(TweetsReducer, initState);

  const fetchTweets = async movie => {
    const data = await twit.get('search/tweets', {
      q: `${movie} since:2011-07-11`,
      count: 100
    });

    console.log(data);
    // dispatch({type: FETCH_TWEETS, payload})
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
