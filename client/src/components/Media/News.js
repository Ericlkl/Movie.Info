import React, { useContext, useEffect } from 'react';
import moment from 'moment';

// Import Component
import Spinner from '../layout/Spinner';
// Import Styled Component
import { Section, SectionTitle, SectionContainer } from '../style/layout';

// Import Contex
import NewsContext from '../../context/News/NewsContext';

const TableRow = ({ article, number }) => {
  // Extract properties from article object
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
  // Get news and method from context
  const { news, isloading, clearNews } = useContext(NewsContext);

  // When client leave this page, clean news
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
