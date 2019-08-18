import React, { Fragment, useEffect, useContext } from 'react';

// Components
import Navbar from '../layout/Navbar';
import MoviesContext from '../../context/Movies/MoviesContext';
import MovieList from '../layout/MovieList';

const TopRated = () => {
  const { movies, fetchTopRatedMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchTopRatedMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Top Rated Movies</h3>
      <MovieList movies={movies} />
    </Fragment>
  );
};

export default TopRated;
