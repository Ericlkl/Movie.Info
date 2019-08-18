import React, { Fragment, useEffect, useContext } from 'react';

import MoviesContext from '../../context/Movies/MoviesContext';

// Components
import Navbar from '../layout/Navbar';
import MovieList from '../layout/MovieList';

const NowShowing = () => {
  const { movies, fetchNowShowingMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchNowShowingMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Now Showing</h3>
      <MovieList movies={movies} />
    </Fragment>
  );
};

export default NowShowing;
