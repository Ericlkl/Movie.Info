import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';

// Layout Component
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';

// Section Component
import Description from '../Movies/Description';
import News from '../Media/News';
import Tweets from '../Media/Twitter';

const Movie = props => {
  const movieID = props.match.params.id;

  const { current, fetchMovie, clearMovies } = useContext(MoviesContext);

  useEffect(
    () => {
      fetchMovie(movieID);
      return () => {
        clearMovies();
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Fragment>
      <Navbar />
      {current !== undefined ? <Description movie={current} /> : <Spinner />}
      <News />
      <Tweets />
    </Fragment>
  );
};

export default Movie;
