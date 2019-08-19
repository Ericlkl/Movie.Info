import React, { useReducer } from 'react';
import NewsContext from './NewsContext';
import NewsReducer from './NewsReducer';

import { FETCH_NEWS, CLEAR_NEWS } from '../action';
import { newsAPI } from '../../api/index';
import { NewsAPIkey } from '../../api/key';

const NewsState = props => {
  const initState = {
    news: [],
    isloading: true
  };

  const [state, dispatch] = useReducer(NewsReducer, initState);

  const fetchNews = async movie => {
    const res = await newsAPI.get('', {
      params: {
        q: movie,
        from: '2019-07-19',
        sortBy: 'published',
        apiKey: NewsAPIkey,
        pageSize: 5
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
