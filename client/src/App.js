import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MoviesState from './context/Movies/MoviesState';
import NewsState from './context/News/NewsState';
import TweetsState from './context/Tweets/TweetsState';

// Pages
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import Ranking from './components/pages/Ranking';
import NowShowing from './components/pages/NowShowing';
import Popular from './components/pages/Popular';
import TopRated from './components/pages/TopRated';
import Upcoming from './components/pages/Upcoming';

import './App.css';

function App() {
  return (
    <TweetsState>
      <NewsState>
        <MoviesState>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/now_showing' exact component={NowShowing} />
              <Route path='/ranking' exact component={Ranking} />
              <Route path='/popular' exact component={Popular} />
              <Route path='/top_rated' exact component={TopRated} />
              <Route path='/upcoming' exact component={Upcoming} />
              <Route path='/movie/:id' component={Movie} />
            </Switch>
          </BrowserRouter>
        </MoviesState>
      </NewsState>
    </TweetsState>
  );
}

export default App;
