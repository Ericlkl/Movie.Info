import { createContext } from 'react';

type Control = {
  lang: string;
  ranking_type: string;
};

export const initialState = {
  current: {},
  movies: [{}],
  control: {
    lang: 'en',
    ranking_type: 'popular'
  },
  fetchMovie: (id: string) => {},
  fetchMovies: () => {},
  fetchMoviesByName: (name: string) => {},
  setControl: (newControlState: Control) => {},
  clearMovies: () => {}
};

const MoviesContext = createContext(initialState);

export default MoviesContext;
