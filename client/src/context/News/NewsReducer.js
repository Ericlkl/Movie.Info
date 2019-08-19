import { FETCH_NEWS, CLEAR_NEWS } from '../action';

const initState = {
  news: [],
  isloading: true
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: [...action.payload]
      };
    case CLEAR_NEWS:
      return { ...initState };
    default:
      return state;
  }
};
