import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import {
  MovieDescription,
  MovieStats,
  DescriptionContent,
  DescriptionStats,
  DescriptionTitle,
  DescriptionOverview,
  DescriptionPoster,
  DescriptionWeb
} from '../style/Movie';

import NewsContext from '../../context/News/NewsContext';
import TweetsContext from '../../context/Tweets/TweetsContext';

const Description = ({ movie }) => {
  const {
    backdrop_path,
    budget,
    homepage,
    overview,
    popularity,
    poster_path,
    release_date,
    status,
    title,
    vote_average,
    vote_count
  } = movie;

  const { fetchNews } = useContext(NewsContext);
  const { fetchTweets } = useContext(TweetsContext);

  useEffect(() => {
    fetchNews(title);
    fetchTweets(title);
    // eslint-disable-next-line
  }, []);

  return (
    <MovieDescription
      style={{
        backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(30, 39, 44, 0.98) 0%, rgba(50, 56, 60, 0.88) 100%)
          , url(https://image.tmdb.org/t/p/w1280/${backdrop_path} 
        `
      }}
    >
      <DescriptionPoster
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />

      <DescriptionContent>
        <DescriptionTitle>
          {title + ` (${moment(release_date).year()})`}
        </DescriptionTitle>

        <DescriptionStats>
          <MovieStats size='1.2rem' hoverColor='#cd201f'>
            <i className='fab fa-gripfire' />
            {' ' + popularity}
          </MovieStats>

          <MovieStats size='1.2rem' hoverColor='#FFFC00'>
            <i className='far fa-star' /> {vote_average} / 10
          </MovieStats>

          <MovieStats size='1.2rem' hoverColor='#02b875'>
            <i className='fas fa-users' />
            {' ' + vote_count}
          </MovieStats>

          <MovieStats size='1.2rem' hoverColor='#e4405f'>
            <i className='far fa-clock' /> {moment(release_date).calendar()}
          </MovieStats>
        </DescriptionStats>

        <DescriptionOverview>
          <h5>Overview</h5>
          <p>{overview}</p>
        </DescriptionOverview>

        <DescriptionWeb>
          <h5>Website</h5>
          <p>
            <i className='fas fa-home' />{' '}
            <a style={{ color: '#ccc' }} href={homepage}>
              {homepage}
            </a>
          </p>
        </DescriptionWeb>
      </DescriptionContent>
    </MovieDescription>
  );
};

export default Description;
