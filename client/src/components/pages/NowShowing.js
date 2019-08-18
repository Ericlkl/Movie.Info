import React, { Fragment, useEffect, useContext } from 'react';

import MoviesContext from '../../context/Movies/MoviesContext';

// Components
import Navbar from '../layout/Navbar';
import Board from '../Movies/Board';

const NowShowing = () => {
  const { movies, fetchNowShowingMovies, clearMovies } = useContext(
    MoviesContext
  );

  useEffect(() => {
    clearMovies();
    fetchNowShowingMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Now Showing</h3>
      <Board movies={movies} />
    </Fragment>
  );
};

export default NowShowing;
