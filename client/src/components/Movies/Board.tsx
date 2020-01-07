// import modules
import _ from 'lodash';
import moment from 'moment';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';

// import Component
import Spinner from '../layout/Spinner';

type CardProps = {
  movie: Movie;
};

// Card Component
const Card: React.FC<CardProps> = ({ movie }) => {
  // get movie properties from props
  const {
    id,
    title,
    poster_path,
    release_date,
    popularity,
    overview,
    vote_average,
    vote_count
  } = movie;

  return (
    <div className='movieboard_card'>
      <div className='movieboard_card_left'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt='movie poster'
        />
      </div>
      <div className='movieboard_card_right'>
        <Link className='movieboard_card_right_title' to={`/movie/${id}`}>
          <h3>{title}</h3>
        </Link>
        <h3 className='movieboard_card_right_time'>
          <i className='far fa-clock' /> {release_date}
        </h3>
        <p className='movieboard_card_right_desc'>
          {_.truncate(overview, {
            length: 200,
            separator: ' '
          })}
        </p>

        <div className='movieboard_card_right_statsbox'>
          <p className='movieboard_card_right_statsbox_info'>
            <i className='fab fa-gripfire' />
            {popularity}
          </p>
          <p className='movieboard_card_right_statsbox_info'>
            <i className='far fa-star' /> {vote_average} / 10
          </p>
          <p className='movieboard_card_right_statsbox_info'>
            <i className='fas fa-users' /> {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

type BoardProps = {
  movies: Movie[];
};

// Board Component for Iterating movies
const Board: React.FC<BoardProps> = ({ movies }) => {
  // Dont show the board when there is no movies
  if (movies.length === 0) return <Spinner />;

  return (
    <Fragment>
      <div className='movieboard'>
        {movies.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Board;
