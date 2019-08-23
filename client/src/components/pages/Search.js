import React, { Fragment, useContext, useState, useEffect } from 'react';
// Layout Components
import Navbar from '../layout/Navbar';
import MoviesContext from '../../context/Movies/MoviesContext';

const SearchBar = () => {
  const [name, setName] = useState('');

  const { clearMovies, fetchMoviesByName } = useContext(MoviesContext);

  const onChange = e => setName(e.target.value);

  const onSubmit = () => {
    clearMovies();
    fetchMoviesByName(name);
  };

  return (
    <div className='container'>
      <div className='input-group'>
        <input
          value={name}
          onChange={onChange}
          type='text'
          className='form-control'
          placeholder='Movie Name'
        />
        <div className='input-group-append'>
          <button
            onClick={onSubmit}
            className='btn btn-outline-secondary'
            id='button-addon2'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  const { movies, clearMovies } = useContext(MoviesContext);
  console.log(movies);

  useEffect(() => {
    clearMovies();
    return () => {
      clearMovies();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Navbar />
      <h1 className='text-center m-5'>Search Movie</h1>
      <SearchBar />
    </Fragment>
  );
};

export default Search;
