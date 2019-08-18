import React from 'react';
import _ from 'lodash';
import {
  MovieCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardHeaderInfo,
  CardImg,
  CardContent
} from '../style/Movie';
import moment from 'moment';

const Card = ({ movie, rank }) => {
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
    <div className='col-sm-12 col-md-6'>
      <MovieCard>
        <CardImg
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt='moviePoster'
        />

        <CardContent>
          <CardHeader>
            <CardHeaderInfo>
              <h6>{title}</h6>
              <h6>
                <i className='far fa-clock' /> {moment(release_date).calendar()}
              </h6>
            </CardHeaderInfo>
          </CardHeader>

          <CardBody>
            <p className='card-text'>
              {_.truncate(overview, {
                length: 250,
                separator: ' '
              })}
            </p>
          </CardBody>

          <CardFooter>
            <p>
              <i className='fab fa-gripfire' />
              {popularity}
            </p>
            <p>
              <i className='far fa-star' /> {vote_average} / 10
            </p>
            <p>
              <i className='fas fa-users' />
              {vote_count}
            </p>
          </CardFooter>
        </CardContent>
      </MovieCard>
    </div>
  );
};

const Board = ({ movies }) => {
  return (
    <div className='row m-3'>
      {movies.map((movie, i) => (
        <Card movie={movie} rank={i + 1} />
      ))}
    </div>
  );
};

export default Board;
