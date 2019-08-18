import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';
import MovieList from '../layout/MovieList';

// Components
import Navbar from '../layout/Navbar';

const Popular = () => {
  const { movies, fetchPopularMovies, clearMovies } = useContext(MoviesContext);

  useEffect(() => {
    clearMovies();
    fetchPopularMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Most Popular Movies</h3>
      <MovieList movies={movies} />
    </Fragment>
  );
};

export default Popular;
