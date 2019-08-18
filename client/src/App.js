import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MoviesState from './context/Movies/MoviesState';
// Layout Components
import Navbar from './components/layout/Navbar';

// Pages
import Home from './components/pages/Home';
import NowShowing from './components/pages/NowShowing';
import Popular from './components/pages/Popular';
import TopRated from './components/pages/TopRated';
import Upcoming from './components/pages/Upcoming';

function App() {
  return (
    <MoviesState>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/now_showing' exact component={NowShowing} />
            <Route path='/popular' exact component={Popular} />
            <Route path='/top_rated' exact component={TopRated} />
            <Route path='/upcoming' exact component={Upcoming} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </MoviesState>
  );
}

export default App;
