import { FETCH_TWEETS, CLEAR_TWEETS } from '../action';

const initState = {
  tweets: [],
  isloading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        tweets: action.payload,
        isloading: false
      };
    case CLEAR_TWEETS:
      return { ...initState };
    default:
      return state;
  }
};
