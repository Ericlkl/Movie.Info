import React, { Fragment, useEffect, useContext } from 'react';
import Navbar from '../layout/Navbar';
import MoviesContext from '../../context/Movies/MoviesContext';

const Movie = props => {
  const movieID = props.match.params.id;

  const { current, fetchMovie, clearMovies } = useContext(MoviesContext);

  useEffect(
    () => {
      fetchMovie(movieID);
      return () => {
        clearMovies();
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Fragment>
      <Navbar />
      <h1>Hello {current.title}</h1>
    </Fragment>
  );
};

export default Movie;
