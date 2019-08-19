import React, { useContext } from 'react';
import moment from 'moment';

import Spinner from '../layout/Spinner';
import NewsContext from '../../context/News/NewsContext';
import { Section, SectionTitle, SectionContainer } from '../style/layout';

const TableRow = ({ article, number }) => {
  const { author, description, title, url, source, publishedAt } = article;

  return (
    <tr>
      <th scope='row'>{number}</th>
      <td>{`${author} (${source.name})`} </td>
      <a href={url}>
        <td>{title}</td>
      </a>
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
          <th scope='col'>Author</th>
          <th scope='col'>title</th>
          <th scope='col'>Description</th>
          <th scope='col'>date</th>
        </tr>
      </thead>
      <tbody>
        {news.map((article, i) => (
          <TableRow article={article} number={i + 1} />
        ))}
      </tbody>
    </table>
  );
};

const News = () => {
  const { news, isloading } = useContext(NewsContext);
  console.log(news);
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>News</SectionTitle>
        {isloading ? <Spinner /> : <NewsTable news={news} />}
      </SectionContainer>
    </Section>
  );
};

export default News;
