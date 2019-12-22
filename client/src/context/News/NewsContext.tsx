import { createContext } from 'react';
import { NewsArticle } from '../../types';

export const providerState: {
  news: NewsArticle[];
  isloading: boolean;
  clearNews: () => void;
  fetchNews: (movie: string) => void;
} = {
  news: [],
  isloading: true,
  clearNews: () => {},
  fetchNews: movie => {}
};

const NewsContext = createContext(providerState);

export default NewsContext;
