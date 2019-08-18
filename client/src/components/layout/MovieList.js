import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Rating, RatingInfo, RatingCountText } from '../style/Movie';

const MovieListItem = ({ movie }) => {
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
          <h5>#1</h5>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt='movieImg'
          />
          <h5>{title}</h5>

          <Rating>
            <i className='fas fa-star fa-2x' />
            <RatingInfo>
              <h5>
                {vote_average} <span style={{ fontSize: '0.4rem' }}>/10</span>
              </h5>
              <RatingCountText>
                <i className='fas fa-users fa-1x' />
                {vote_count}
              </RatingCountText>
            </RatingInfo>
          </Rating>
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
        {movies.map(movie => (
          <MovieListItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
