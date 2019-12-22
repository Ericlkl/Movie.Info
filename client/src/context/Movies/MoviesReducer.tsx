import { MoviesAction } from '../action';

import { Movie } from '../../types';
import { Control } from '../../types';

const initialState: {
  current: Movie | undefined;
  movies: Movie[];
  control: Control;
} = {
  current: undefined,
  movies: [],
  control: {
    lang: 'en',
    ranking_type: 'popular'
  }
};

type State = {
  current: any;
  movies: any;
  control: {
    lang: string;
    ranking_type: string;
  };
};

type Action = {
  type: string;
  payload?: any;
};

const MoviesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case MoviesAction.SET_CONTROL:
      return {
        ...initialState,
        control: action.payload
      };
    case MoviesAction.FETCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    case MoviesAction.FETCH_MOVIE:
      return {
        ...state,
        current: action.payload
      };
    case MoviesAction.CLEAR_MOVIES:
      return { ...initialState };
    default:
      return state;
  }
};

export default MoviesReducer;
