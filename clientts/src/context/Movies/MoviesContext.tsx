import { createContext } from 'react';
import { Movie } from '../../types/movie';
import { Control } from '../../types/control';

export const initialState: {
  current: Movie | undefined;
  movies: Movie[];
  control: Control;
  fetchMovie: (id: string) => void;
  fetchMovies: () => void;
  fetchMoviesByName: (name: string) => void;
  setControl: (newControlState: Control) => void;
  clearMovies: () => void;
} = {
  current: undefined,
  movies: [],
  control: {
    lang: 'en',
    ranking_type: 'popular'
  },
  fetchMovie: id => {},
  fetchMovies: () => {},
  fetchMoviesByName: name => {},
  setControl: newControlState => {},
  clearMovies: () => {}
};

const MoviesContext = createContext(initialState);

export default MoviesContext;
