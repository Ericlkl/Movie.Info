import React, { useReducer } from 'react';
import MoviesContext from './MoviesContext';
import MoviesReducer from './MoviesReducer';
import axios from 'axios';
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  SET_CONTROL,
  CLEAR_MOVIES
} from '../action';

const MoviesState = props => {
  const initState = {
    current: undefined,
    movies: [],
    control: {
      lang: 'en',
      ranking_type: 'popular'
    }
  };

  const [state, dispatch] = useReducer(MoviesReducer, initState);

  const setControl = newControlState => {
    dispatch({ type: SET_CONTROL, payload: newControlState });
  };

  const fetchMovies = async () => {
    const res = await axios.get('/api/movies/', {
      params: state.control
    });
    const payload = res.data;
    dispatch({ type: FETCH_MOVIES, payload });
  };

  const fetchMoviesByName = async name => {
    const res = await axios.get('/api/search/movie', {
      params: {
        name
      }
    });
    const payload = res.data;
    dispatch({ type: FETCH_MOVIES, payload });
  };

  const fetchMovie = async id => {
    try {
      const res = await axios.get(`/api/movies/${id}`);
      dispatch({ type: FETCH_MOVIE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  return (
    <MoviesContext.Provider
      value={{
        current: state.current,
        movies: state.movies,
        control: state.control,
        fetchMovie,
        fetchMovies,
        fetchMoviesByName,
        setControl,
        clearMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
