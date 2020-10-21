import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { authContext } from '../contexts/auth';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  const { signed } = useContext(authContext);
  return (
    <switch>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>

      <Route path="/" exact>
        { !signed
          ? <SignIn />
          : <Dashboard />}
      </Route>

    </switch>
  );
};

export default Routes;
