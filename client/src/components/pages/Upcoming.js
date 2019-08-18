import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';
import MovieList from '../layout/MovieList';

// Components
import Navbar from '../layout/Navbar';

const Upcoming = () => {
  const { movies, fetchUpcomingMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchUpcomingMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Upcoming Movies</h3>
      <MovieList movies={movies} />
    </Fragment>
  );
};

export default Upcoming;
