// import module
import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Movie } from '../../types';

// Import Context API
import NewsContext from '../../context/News/NewsContext';
import TweetsContext from '../../context/Tweets/TweetsContext';

{
  /* <MovieDescription
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
    <MovieStats size='2rem' hoverColor='#cd201f'>
      <i className='fab fa-gripfire' />
      {' ' + popularity}
    </MovieStats>

    <MovieStats size='2rem' hoverColor='#FFFC00'>
      <i className='far fa-star' /> {vote_average} / 10
    </MovieStats>

    <MovieStats size='2rem' hoverColor='#02b875'>
      <i className='fas fa-users' />
      {' ' + vote_count}
    </MovieStats>

    <MovieStats size='2rem' hoverColor='#02b875'>
      <i className='fas fa-globe-asia' />
      {' ' + status}
    </MovieStats>

    <MovieStats size='2rem' hoverColor='#e4405f'>
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
</MovieDescription> */
}

type DescriptionProps = {
  movie: Movie;
};

const Description: React.FC<DescriptionProps> = ({ movie }) => {
  // Get properties from movie object
  const {
    backdrop_path,
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

  // Get function from Context API
  const { fetchNews } = useContext(NewsContext);
  const { fetchTweets } = useContext(TweetsContext);

  // When the component initialize fetch news and tweets related to this movie
  useEffect(() => {
    fetchNews(title);
    fetchTweets(title);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        backgroundImage: `
  radial-gradient(circle at 20% 50%, rgba(30, 39, 44, 0.98) 0%, rgba(50, 56, 60, 0.88) 100%)
    , url(https://image.tmdb.org/t/p/w1280/${backdrop_path} 
  `
      }}
      className='moviedesc'
    >
      <div className='moviedesc_content'>
        <div className='moviedesc_content_left'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt='movie poster'
          />
        </div>
        <div className='moviedesc_content_right'>
          <h1 className='moviedesc_content_right_title'>
            {title + ` (${moment(release_date).year()})`}
          </h1>
          <div className='moviedesc_content_right_status'>
            <h5 className='moviedesc_content_right_status_popularity'>
              <i className='fab fa-gripfire' /> {popularity}
            </h5>
            <h5 className='moviedesc_content_right_status_star'>
              <i className='far fa-star' /> {vote_average} / 10
            </h5>
            <h5 className='moviedesc_content_right_status_vote'>
              <i className='fas fa-users' /> {vote_count}
            </h5>
            <h5 className='moviedesc_content_right_status_releaseStatus'>
              <i className='fas fa-globe-asia' /> {status}
            </h5>
            <h5 className='moviedesc_content_right_status_releaseDate'>
              <i className='far fa-clock' /> {moment(release_date).calendar()}
            </h5>
          </div>

          <div className='moviedesc_content_right_overview'>
            <h5>Overview</h5>
            <p>{overview}</p>
          </div>

          <div className='moviedesc_content_right_website'>
            <h5>Website</h5>
            <p>
              <i className='fas fa-home' />{' '}
              <a style={{ color: '#ccc' }} href={homepage}>
                {homepage}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
