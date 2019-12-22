import React, { useReducer } from 'react';
import MoviesContext, { initialState } from './MoviesContext';
import MoviesReducer from './MoviesReducer';
import axios from 'axios';
import { MoviesAction } from '../action';

const MoviesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const setControl = (newControlState: object) => {
    dispatch({ type: MoviesAction.SET_CONTROL, payload: newControlState });
  };

  const fetchMovies = async () => {
    // Success Case for fetching movie data
    try {
      const res = await axios.get('/api/movies/', {
        params: state.control
      });
      const payload = res.data;
      dispatch({ type: MoviesAction.FETCH_MOVIES, payload });
    } catch (error) {
      // Display error
      console.error(error.message);
    }
  };

  const fetchMoviesByName = async (name: string) => {
    // Success Case for fetching movie data
    try {
      const res = await axios.get('/api/search/movie', {
        params: {
          name
        }
      });

      const payload = res.data;
      dispatch({ type: MoviesAction.FETCH_MOVIES, payload });
    } catch (error) {
      // Fail
      console.error(error.message);
    }
  };

  const fetchMovie = async (id: string) => {
    // Success Case for fetching movie data
    try {
      const res = await axios.get(`/api/movies/${id}`);
      dispatch({ type: MoviesAction.FETCH_MOVIE, payload: res.data });
    } catch (error) {
      // Fail
      console.log(error);
    }
  };

  const clearMovies = () => dispatch({ type: MoviesAction.CLEAR_MOVIES });

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
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
