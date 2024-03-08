import React from 'react';

import Edit from '../pages/Home/Edit';
import Create from '../pages/Home/create'; 
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Index';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/edit" component={Edit} />
      <Route path="/create" component={Create} />
    </Switch>
  </Router>
);

export default Routes;
