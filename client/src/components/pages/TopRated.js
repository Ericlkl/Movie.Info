import React, { useEffect, useContext } from 'react';
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
    <div>
      <h3 className='text-center m-5'>Top Rated Movies</h3>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
