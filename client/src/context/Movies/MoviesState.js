import React, { useReducer } from 'react';
import MoviesContext from './MoviesContext';
import MoviesReducer from './MoviesReducer';
import { movieAPI } from '../../api';
import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE,
  CLEAR_MOVIES
} from '../action';

const MoviesState = props => {
  const initState = {
    current: {},
    movies: []
  };

  const [state, dispatch] = useReducer(MoviesReducer, initState);

  const fetchPopularMovies = async () => {
    const res = await movieAPI.get('/movie/popular');
    const payload = res.data.results;
    dispatch({ type: FETCH_POPULAR_MOVIES, payload });
  };

  const fetchNowPlayingMovies = async () => {
    const res = await movieAPI.get('/movie/now_playing');
    const payload = res.data.results;

    dispatch({ type: FETCH_NOW_PLAYING_MOVIES, payload });
  };

  const fetchTopRatedMovies = async () => {
    const res = await movieAPI.get('/movie/top_rated');
    const payload = res.data.results;

    dispatch({ type: FETCH_TOP_RATED_MOVIES, payload });
  };

  const fetchUpcomingMovies = async () => {
    const res = await movieAPI.get('/movie/upcoming');
    const payload = res.data.results;

    dispatch({ type: FETCH_UPCOMING_MOVIES, payload });
  };

  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  return (
    <MoviesContext.Provider
      value={{
        current: state.current,
        courses: state.courses,
        fetchPopularMovies,
        fetchNowPlayingMovies,
        fetchTopRatedMovies,
        fetchUpcomingMovies,
        clearMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
