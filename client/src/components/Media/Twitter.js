import React, { useContext, useEffect } from 'react';
import TweetsContext from '../../context/Tweets/TweetsContext';
import Spinner from '../layout/Spinner';

import { Section, SectionTitle, SectionContainer } from '../style/layout';

const Card = ({ tweet }) => {
  console.log(tweet);
  const { text, user, entities, created_at } = tweet;
  return (
    <div className={'card'}>
      <div class='card-header d-flex justify-content-between'>
        <h6 style={{ color: '#55acee' }}>
          <i class='fab fa-twitter' /> {user.name}
        </h6>
      </div>
      <div className='card-body'>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
};
const Board = ({ tweets }) => {
  return (
    <div className='card-columns'>
      {tweets.map(tweet => (
        <Card tweet={tweet} />
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
