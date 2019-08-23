import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MoviesState from './context/Movies/MoviesState';
import NewsState from './context/News/NewsState';
import TweetsState from './context/Tweets/TweetsState';

// Pages
import Search from './components/pages/Search';
import Movie from './components/pages/Movie';
import Ranking from './components/pages/Ranking';

import './App.css';

function App() {
  return (
    <TweetsState>
      <NewsState>
        <MoviesState>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Search} />
              <Route path='/search' exact component={Search} />
              <Route path='/ranking' exact component={Ranking} />
              <Route path='/movie/:id' component={Movie} />
            </Switch>
          </BrowserRouter>
        </MoviesState>
      </NewsState>
    </TweetsState>
  );
}

export default App;
