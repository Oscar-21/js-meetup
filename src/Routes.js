import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Account from './containers/Account';

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={Home} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/signup" exact component={Account} props={childProps} />
  </Switch>
);

