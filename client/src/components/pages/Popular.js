import React, { useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';
import MovieList from '../layout/MovieList';

const Popular = () => {
  const { movies, fetchPopularMovies, clearMovies } = useContext(MoviesContext);

  useEffect(() => {
    clearMovies();
    fetchPopularMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <div>
      <h3 className='text-center m-5'>Most Popular Movies</h3>
      <MovieList movies={movies} />
    </div>
  );
};

export default Popular;
