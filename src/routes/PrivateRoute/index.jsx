import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { authContext } from '../../contexts/auth';

const PrivateRoute = ({ children, ...rest }) => {
  const { signed } = useContext(authContext);
  return (

    <Route
      {...rest}
      render={({ location }) => (signed ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
