import React, { Fragment, useEffect, useContext } from 'react';
import MoviesContext from '../../context/Movies/MoviesContext';

// Layout Component
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';

// Section Component
import Description from '../Movies/Description';
import News from '../Media/News';
import Tweets from '../Media/Twitter';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const Movie: React.FC<Props> = ({ match }) => {
  // Get movie ID from URL params
  const movieID = match.params.id;

  // Get movie property from Movie Context API
  const { current, fetchMovie, clearMovies } = useContext(MoviesContext);

  // If current movie is undefined (waiting for getting data from server) display Spinner
  const renderMovieDecription = () => {
    if (current) {
      return <Description movie={current} />;
    } else {
      return <Spinner />;
    }
  };

  useEffect(
    () => {
      // Fetch Movie When this page initialize
      fetchMovie(movieID);
      return () => {
        // Clean movie data when user leave this page
        clearMovies();
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <Fragment>
      <Navbar />
      {renderMovieDecription()}
      <News />
      <Tweets />
    </Fragment>
  );
};

export default Movie;
