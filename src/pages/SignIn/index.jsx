import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { authContext } from '../../contexts/auth';

const SignIn = () => {
  const { signed, signIn } = useContext(authContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleSignIn() {
    const resp = await signIn(username, password);
    if (!resp) {
      setOpen(true);
    }
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
        label="Username"
        name="username"
        fullWidth
        margin="normal"
        onChange={
          (e) => {
            setUsername(e.target.value);
          }
        }
      />
      <TextField
        type="password"
        variant="outlined"
        label="Password"
        name="password"
        fullWidth
        margin="normal"
        onChange={
          (e) => {
            setPassword(e.target.value);
          }
        }
      />
      <Button
        type="button"
        onClick={handleSignIn}
        fullWidth
        margin="normal"
        color="primary"
      >
        Sign in
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">
          Username or password invalid!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignIn;
