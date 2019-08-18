import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Rating,
  RatingInfo,
  RatingCountText,
  Poster
} from '../style/Movie';

const MovieListItem = ({ movie, rank }) => {
  const {
    id,
    title,
    poster_path,
    release_date,
    popularity,
    vote_average,
    vote_count
  } = movie;

  return (
    <li className='list-group-item list-group-item-action'>
      <Link to={`/movie/${id}`}>
        <Container>
          <h5># {rank}</h5>
          <Poster
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt='movieImg'
          />
          <h5>{title}</h5>

          <RatingInfo>
            <h4>
              <i className='fas fa-star' /> {vote_average} /10
            </h4>
            <RatingCountText>
              <i className='fas fa-users fa-1x' />
              {vote_count}
            </RatingCountText>
          </RatingInfo>

          <p>
            <i class='far fa-calendar-alt' />
            {release_date}
          </p>
        </Container>
      </Link>
    </li>
  );
};

const MovieList = ({ movies }) => {
  if (movies.length == 0) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className='m-5'>
      <ul className='list-group'>
        {movies.map((movie, i) => (
          <MovieListItem movie={movie} rank={i + 1} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
