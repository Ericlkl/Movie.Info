import React, { Fragment } from 'react';
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

const BoardControl = () => {
  const onSelect = e => {
    console.log('Selected');
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <form className='container'>
      <div className='form-row'>
        <div className='col'>
          <label htmlFor='lang'>Language</label>
          <select
            onChange={onSelect}
            name='lang'
            defaultValue='en'
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
            defaultValue='Popular'
            onChange={onSelect}
          >
            <option value='Latest'>Latest</option>
            <option value='Now Playing'>Now Playing</option>
            <option value='Popular'>Popular</option>
            <option value='Top Rated'>Top Rated</option>
            <option value='Up Coming'>Up Coming</option>
          </select>
        </div>
      </div>
    </form>
  );
};

const Board = ({ movies }) => {
  if (movies.length === 0) return <Spinner />;

  return (
    <Fragment>
      <BoardControl />
      <MovieBoard>
        {movies.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
      </MovieBoard>
    </Fragment>
  );
};

export default Board;
