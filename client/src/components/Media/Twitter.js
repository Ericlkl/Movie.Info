import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import TweetsContext from '../../context/Tweets/TweetsContext';
import Spinner from '../layout/Spinner';

import { Section, SectionTitle, SectionContainer } from '../style/layout';

const Card = ({ tweet }) => {
  const { text, user, entities } = tweet;
  return (
    <div className='card'>
      <div className='card-header d-flex justify-content-between'>
        <h6 style={{ color: '#55acee' }}>
          <i className='fab fa-twitter' /> {user.name}
        </h6>
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
const Board = ({ tweets }) => {
  return (
    <div className='card-columns'>
      {tweets.map(tweet => (
        <Card tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};

const Twitter = () => {
  const { tweets, isloading, clearTweets } = useContext(TweetsContext);

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
