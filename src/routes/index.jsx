import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => (
  <Router>
    <Switch>
      <AuthRoutes />
    </Switch>
    <Switch>
      <AppRoutes />
    </Switch>
  </Router>
);

export default Routes;
