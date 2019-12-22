import { FETCH_NEWS, CLEAR_NEWS } from '../action';
import { NewsArticle } from '../../types';
import { providerState } from './NewsContext';
type State = {
  news: NewsArticle[];
  isloading: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: State, action: Action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        isloading: false,
        news: [...action.payload]
      };
    case CLEAR_NEWS:
      return { ...providerState };
    default:
      return state;
  }
};
