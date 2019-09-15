import React, { Fragment, useEffect, useContext } from 'react';

import MoviesContext from '../../context/Movies/MoviesContext';

// Components
import Navbar from '../layout/Navbar';
import Board from '../Movies/Board';

const RankingControl = () => {
  const { control, setControl } = useContext(MoviesContext);

  const onSelect = e => {
    setControl({
      ...control,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className='container'>
      <div className='form-row'>
        <div className='col'>
          <label htmlFor='lang'>Language</label>
          <select
            onChange={onSelect}
            name='lang'
            value={control.lang}
            className='custom-select custom-select-lg mb-3'
          >
            <option value='en'>English</option>
            <option value='zh'>Chinese</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='it'>Italian</option>
            <option value='jp'>Japan</option>
          </select>
        </div>
        <div className='col'>
          <label htmlFor='ranking_type'>Type</label>
          <select
            name='ranking_type'
            className='custom-select custom-select-lg mb-3'
            value={control.ranking_type}
            onChange={onSelect}
          >
            <option value='now_playing'>Now Playing</option>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
            <option value='upcoming'>Up Coming</option>
          </select>
        </div>
      </div>
    </form>
  );
};

const Ranking = () => {
  const { movies, fetchMovies, control } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [control]);

  return (
    <Fragment>
      <Navbar />
      <h3 className='text-center m-5'>Ranking</h3>
      <RankingControl />
      <Board movies={movies} />
    </Fragment>
  );
};

export default Ranking;
