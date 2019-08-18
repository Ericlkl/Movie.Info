import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_NOW_SHOWING_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE,
  CLEAR_MOVIES
} from '../action';

const initState = {
  current: {},
  movies: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
    case FETCH_TOP_RATED_MOVIES:
    case FETCH_NOW_SHOWING_MOVIES:
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    case FETCH_MOVIE:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_MOVIES:
      return { ...initState };
    default:
      return state;
  }
};
