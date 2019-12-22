import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Context State
import MoviesProvider from './context/Movies/MoviesProvider';
import NewsState from './context/News/NewsProvider';
import TweetsState from './context/Tweets/TweetsProvider';

// Pages
import Search from './components/pages/Search';
import Movie from './components/pages/Movie';
import Ranking from './components/pages/Ranking';

import './App.css';

const App: React.FC = () => {
  return (
    <TweetsState>
      <NewsState>
        <MoviesProvider>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Search} />
              <Route path='/search' exact component={Search} />
              <Route path='/ranking' exact component={Ranking} />
              <Route path='/movie/:id' component={Movie} />
            </Switch>
          </BrowserRouter>
        </MoviesProvider>
      </NewsState>
    </TweetsState>
  );
};

export default App;
