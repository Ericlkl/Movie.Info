import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MoviesState from './context/Movies/MoviesState';
import Home from './components/pages/Home';
import NowPlaying from './components/pages/NowPlaying';
import Popular from './components/pages/Popular';
import TopRated from './components/pages/TopRated';
import Upcoming from './components/pages/Upcoming';

function App() {
  return (
    <MoviesState>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/now_playing' exact component={NowPlaying} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/top_rated' exact component={TopRated} />
          <Route path='/upcoming' exact component={Upcoming} />
        </Switch>
      </BrowserRouter>
    </MoviesState>
  );
}

export default App;
