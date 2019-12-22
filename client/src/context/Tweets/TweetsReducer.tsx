import { TweetsAction } from '../action';
import { initialState } from './TweetsContext';
import { Tweet } from '../../types';

type State = {
  tweets: Tweet[];
  isloading: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: State, action: Action) => {
  switch (action.type) {
    case TweetsAction.FETCH_TWEETS:
      return {
        tweets: action.payload,
        isloading: false
      };
    case TweetsAction.CLEAR_TWEETS:
      return { ...initialState };
    default:
      return state;
  }
};
