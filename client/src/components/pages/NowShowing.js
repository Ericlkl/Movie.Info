import React, { useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';
import List from '../layout/List';

const NowShowing = () => {
  const { movies, fetchNowShowingMovies } = useContext(MoviesContext);

  useEffect(() => {
    fetchNowShowingMovies();
    // eslint-disable-next-line
  }, []);

  console.log(movies);

  return (
    <div>
      <h3 className='text-center m-5'>Now Showing</h3>
    </div>
  );
};

export default NowShowing;
