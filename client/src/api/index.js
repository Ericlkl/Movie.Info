import axios from 'axios';
import Twit from 'twit';
import {
  tweeterAPIkey,
  tweeterAPISecret,
  tweeterAccessKey,
  tweeterAccessKeySecret
} from './key';
export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/everything'
});

export const twit = Twit({
  consumer_key: tweeterAPIkey,
  consumer_secret: tweeterAPISecret,
  access_token: tweeterAccessKey,
  access_token_secret: tweeterAccessKeySecret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});
