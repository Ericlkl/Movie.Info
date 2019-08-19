import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MoviesState from './context/Movies/MoviesState';

// Pages
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import NowShowing from './components/pages/NowShowing';
import Popular from './components/pages/Popular';
import TopRated from './components/pages/TopRated';
import Upcoming from './components/pages/Upcoming';

import './App.css';

function App() {
  return (
    <MoviesState>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/now_showing' exact component={NowShowing} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/top_rated' exact component={TopRated} />
          <Route path='/upcoming' exact component={Upcoming} />
          <Route path='/movie/:id' component={Movie} />
        </Switch>
      </BrowserRouter>
    </MoviesState>
  );
}

export default App;
