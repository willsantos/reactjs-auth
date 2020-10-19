import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <Route path="/dashboard">
    <Dashboard />
  </Route>
);

export default AppRoutes;
