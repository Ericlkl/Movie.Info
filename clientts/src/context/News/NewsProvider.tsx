import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext, { providerState } from './NewsContext';
import NewsReducer from './NewsReducer';

import { FETCH_NEWS, CLEAR_NEWS } from '../action';

const NewsState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(NewsReducer, providerState);

  const fetchNews = async (movie: string) => {
    // try to fetch news
    try {
      // update global state when fetch news successfully
      const res = await axios.get(`/api/news/`, {
        params: {
          keyword: movie
        }
      });
      dispatch({
        type: FETCH_NEWS,
        payload: res.data.articles
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearNews = () => dispatch({ type: CLEAR_NEWS });
  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        isloading: state.isloading,
        clearNews,
        fetchNews
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsState;
