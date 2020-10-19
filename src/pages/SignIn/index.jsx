import React from 'react';
import * as auth from '../../services/api';

const SignIn = () => {
  async function handleSignIn() {
    const response = await auth.logIn();
    console.log('Logou!', response);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={handleSignIn}>Fazer Login</button>
    </div>
  );
};

export default SignIn;
