import React, { useContext, useEffect } from 'react';
import TweetsContext from '../../context/Tweets/TweetsContext';
import Spinner from '../layout/Spinner';

import { Section, SectionTitle, SectionContainer } from '../style/layout';

const Twitter = () => {
  const { tweets, isloading, clearTweets } = useContext(TweetsContext);

  // eslint-disable-next-line
  useEffect(() => () => clearTweets(), []);

  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Tweets</SectionTitle>
        {isloading ? <Spinner /> : null}
      </SectionContainer>
    </Section>
  );
};

export default Twitter;
