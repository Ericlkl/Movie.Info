export type Control = {
  lang: string;
  ranking_type: string;
};

export type Movie = {
  id: string;
  title: string;
  poster_path: string;
  release_date: Date;
  popularity: string;
  overview: string;
  vote_average: string;
  vote_count: string;
  backdrop_path: string;
  homepage: string;
  status: string;
};

export type NewsArticle = {
  author: string;
  description: string;
  title: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
  urlToImage: string;
};

export type Tweet = {
  id: string;
  text: string;
  user: any;
  entities: any;
  created_at: string;
};
