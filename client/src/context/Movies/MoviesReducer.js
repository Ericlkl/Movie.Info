import {
  FETCH_MOVIE,
  SET_CONTROL,
  FETCH_MOVIES,
  CLEAR_MOVIES
} from '../action';

const initState = {
  current: undefined,
  movies: [],
  control: {
    lang: 'en',
    ranking_type: 'popular'
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_CONTROL:
      return {
        ...initState,
        control: action.payload
      };
    case FETCH_MOVIES:
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
