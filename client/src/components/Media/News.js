import React, { useContext, useEffect } from 'react';
import moment from 'moment';

import Spinner from '../layout/Spinner';
import NewsContext from '../../context/News/NewsContext';
import { Section, SectionTitle, SectionContainer } from '../style/layout';

const TableRow = ({ article, number }) => {
  const {
    author,
    description,
    title,
    url,
    source,
    publishedAt,
    urlToImage
  } = article;
  return (
    <tr>
      <th scope='row'>{number}</th>
      <td>
        <a className='text-muted' href={url}>{`${title} - ${author} (${
          source.name
        })`}</a>
        <img src={urlToImage} className='img-fluid' alt='cover' />
      </td>
      <td>{description}</td>
      <td>{moment(publishedAt).calendar()}</td>
    </tr>
  );
};

const NewsTable = ({ news }) => {
  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>title</th>
          <th scope='col'>Description</th>
          <th scope='col'>date</th>
        </tr>
      </thead>
      <tbody>
        {news.map((article, i) => (
          <TableRow key={i} article={article} number={i + 1} />
        ))}
      </tbody>
    </table>
  );
};

const News = () => {
  const { news, isloading, clearNews } = useContext(NewsContext);

  // eslint-disable-next-line
  useEffect(() => () => clearNews(), []);

  return (
    <Section bgColor='#f4f4f4'>
      <SectionContainer>
        <SectionTitle>News</SectionTitle>
        {isloading ? <Spinner /> : <NewsTable news={news} />}
      </SectionContainer>
    </Section>
  );
};

export default News;
