import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';

// Components
import Navbar from '../layout/Navbar';
import Board from '../layout/Board';

const Popular = () => {
  const { movies, fetchPopularMovies, clearMovies } = useContext(MoviesContext);

  useEffect(() => {
    clearMovies();
    fetchPopularMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Most Popular Movies</h3>
      <Board movies={movies} />
    </Fragment>
  );
};

export default Popular;
