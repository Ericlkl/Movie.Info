// import modules
import moment from 'moment';
import React, { useContext, useEffect } from 'react';

// Import Component
import Spinner from '../layout/Spinner';
// Import Styled Components
import { Section, SectionTitle, SectionContainer } from '../style/layout';

// Import Context API
import TweetsContext from '../../context/Tweets/TweetsContext';

const Card = ({ tweet }) => {
  // get tweet property from tweet object
  const { text, user, entities, created_at } = tweet;
  return (
    <div className='card'>
      <div className='card-header d-flex justify-content-between'>
        <h6 style={{ color: '#55acee' }}>
          <i className='fab fa-twitter' /> {user.name}
        </h6>
        <small>{moment(created_at).fromNow()}</small>
      </div>
      <div className='card-body'>
        <p
          style={{ fontSize: '0.7rem' }}
          className='card-text font-weight-light'
        >
          {text}
        </p>
        {entities.hashtags.map(tag => (
          <span className='badge badge-info m-1' key={tag.text}>
            #{tag.text}
          </span>
        ))}
      </div>
    </div>
  );
};

// Tweets Board Component for literating the tweets
const Board = ({ tweets }) => {
  return (
    <div className='card-columns'>
      {tweets.map(tweet => (
        <Card tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};

// Twitter Section Component
const Twitter = () => {
  // Get tweets variable and function from TweetsContext API
  const { tweets, isloading, clearTweets } = useContext(TweetsContext);

  // When user leave this page , clean tweets
  // eslint-disable-next-line
  useEffect(() => () => clearTweets(), []);

  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Tweets</SectionTitle>
        {isloading ? <Spinner /> : <Board tweets={tweets} />}
      </SectionContainer>
    </Section>
  );
};

export default Twitter;
