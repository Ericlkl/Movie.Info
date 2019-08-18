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
            <RatingInfo>
              <h5>
                {vote_average} <span style={{ fontSize: '0.4rem' }}>/10</span>
              </h5>
              <RatingCountText>{vote_count}</RatingCountText>
            </RatingInfo>
          </Rating>
          <p>{release_date}</p>
        </Container>
      </Link>
    </li>
  );
};

const MovieList = ({ movies }) => {
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
