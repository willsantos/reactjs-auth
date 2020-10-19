import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const AuthRoutes = () => (
  <Route path="/" exact>
    <SignIn />
  </Route>
);

export default AuthRoutes;
