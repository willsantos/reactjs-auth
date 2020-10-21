import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { authContext } from '../../contexts/auth';

const SignIn = () => {
  const { signed, signIn } = useContext(authContext);

  async function handleSignIn() {
    signIn();
  }

  if (signed) {
    return (
      <Redirect
        to={{
          pathname: '/dashboard',

        }}
      />
    );
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={handleSignIn}>Fazer Login</button>
    </div>
  );
};

export default SignIn;
