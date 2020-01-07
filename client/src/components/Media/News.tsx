import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';

// Import Component
import Spinner from '../layout/Spinner';

// Import Contex
import NewsContext from '../../context/News/NewsContext';

import { NewsArticle } from '../../types/index';

type TableRowProps = {
  article: NewsArticle;
  number: number;
};

const TableRow: React.FC<TableRowProps> = ({ article, number }) => {
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
        <a
          className='text-muted'
          href={url}
        >{`${title} - ${author} (${source.name})`}</a>
        <img src={urlToImage} className='img-fluid' alt='cover' />
      </td>
      <td>{description}</td>
      <td>{moment(publishedAt).calendar()}</td>
    </tr>
  );
};

type NewsTableProps = {
  news: NewsArticle[];
};

const NewsTable: React.FC<NewsTableProps> = ({ news }) => {
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
    <section className='section'>
      <Container>
        <h3 className='section_title'>News</h3>
        {isloading ? <Spinner /> : <NewsTable news={news} />}
      </Container>
    </section>
  );
};

export default News;
