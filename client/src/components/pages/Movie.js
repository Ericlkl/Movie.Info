import React, { Fragment, useEffect, useContext } from 'react';

import Navbar from '../layout/Navbar';
import MoviesContext from '../../context/Movies/MoviesContext';
import Description from '../Movies/Description';
import Spinner from '../layout/Spinner';

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
      {current !== undefined ? <Description movie={current} /> : <Spinner />}
    </Fragment>
  );
};

export default Movie;
