import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Head from './Head';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div className="app">
    <Head />
    <nav aria-label="Header Section">
     <h1>Space X Launch Programme</h1>
    </nav>
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
      </Switch>
    </main>
   <div className="footer"><span>Developed by</span> : Kush Kumar</div>
  </div>
);

export default App;
