import React, { Fragment, useEffect, useContext } from 'react';

// Components
import Navbar from '../layout/Navbar';
import MoviesContext from '../../context/Movies/MoviesContext';
import Board from '../Movies/Board';

const TopRated = () => {
  const { movies, fetchTopRatedMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchTopRatedMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Top Rated Movies</h3>
      <Board movies={movies} />
    </Fragment>
  );
};

export default TopRated;
