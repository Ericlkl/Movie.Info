import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';

// Components
import Navbar from '../layout/Navbar';
import Board from '../layout/Board';

const Upcoming = () => {
  const { movies, fetchUpcomingMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchUpcomingMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Upcoming Movies</h3>
      <Board movies={movies} />
    </Fragment>
  );
};

export default Upcoming;
