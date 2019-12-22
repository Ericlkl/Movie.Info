import { createContext } from 'react';
import { Tweet } from '../../types/';

export const initialState: {
  tweets: Tweet[];
  isloading: boolean;
  fetchTweets: (movie: string) => void;
  clearTweets: () => void;
} = {
  tweets: [],
  isloading: true,
  fetchTweets: movie => {},
  clearTweets: () => {}
};

const TweetsContext = createContext(initialState);

export default TweetsContext;
