import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Spinner from '../layout/Spinner';

import {
  MovieBoard,
  MovieCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardHeaderInfo,
  CardImg,
  CardContent,
  MovieStats
} from '../style/Movie';
import moment from 'moment';

const Card = ({ movie }) => {
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
    <MovieCard>
      <CardImg
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt='moviePoster'
      />

      <CardContent>
        <CardHeader>
          <CardHeaderInfo>
            <Link to={`/movie/${id}`}>
              <h6>{title}</h6>
            </Link>
            <h6>
              <i className='far fa-clock' /> {moment(release_date).calendar()}
            </h6>
          </CardHeaderInfo>
        </CardHeader>

        <CardBody>
          <p className='card-text'>
            {_.truncate(overview, {
              length: 200,
              separator: ' '
            })}
          </p>
        </CardBody>

        <CardFooter>
          <MovieStats size='0.8rem'>
            <i className='fab fa-gripfire' />
            {popularity}
          </MovieStats>
          <MovieStats size='0.8rem'>
            <i className='far fa-star' /> {vote_average} / 10
          </MovieStats>
          <MovieStats size='0.8rem'>
            <i className='fas fa-users' />
            {vote_count}
          </MovieStats>
        </CardFooter>
      </CardContent>
    </MovieCard>
  );
};

const Board = ({ movies }) => {
  if (movies.length === 0) return <Spinner />;

  return (
    <MovieBoard>
      {movies.map(movie => (
        <Card movie={movie} />
      ))}
    </MovieBoard>
  );
};

export default Board;
