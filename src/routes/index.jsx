import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { authContext } from '../contexts/auth';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  const { signed } = useContext(authContext);
  return (
    <Switch>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>

      <Route path="/" exact>
        { !signed
          ? <SignIn />
          : <Dashboard />}
      </Route>

    </Switch>
  );
};

export default Routes;
