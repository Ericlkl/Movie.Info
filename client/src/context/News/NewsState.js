import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './NewsContext';
import NewsReducer from './NewsReducer';

import { FETCH_NEWS, CLEAR_NEWS } from '../action';

const NewsState = props => {
  const initState = {
    news: [],
    isloading: true
  };

  const [state, dispatch] = useReducer(NewsReducer, initState);

  const fetchNews = async movie => {
    const res = await axios.get(`/api/news/`, {
      params: {
        keyword: movie
      }
    });
    dispatch({
      type: FETCH_NEWS,
      payload: res.data.articles
    });
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
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
