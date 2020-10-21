import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
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
      <TextField
        type="text"
        variant="outlined"
        label="Usuário"
        name="username"
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        variant="outlined"
        label="Senha"
        name="password"
        fullWidth
        margin="normal"
      />
      <Button
        type="button"
        onClick={handleSignIn}
        fullWidth
        margin="normal"
        color="primary"
      >
        Fazer Login
      </Button>
    </div>
  );
};

export default SignIn;
