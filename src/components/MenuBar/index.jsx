import React, { useContext } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Button, makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { authContext } from '../../contexts/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  const { signed, signIn, signOut } = useContext(authContext);

  return (

    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Auth React JS
        </Typography>
        {signed
          ? <Button color="inherit" onClick={signOut}>Sign Out</Button>
          : <Button color="inherit" onClick={signIn}>Sign In</Button>}
      </Toolbar>
    </AppBar>

  );
};

export default MenuBar;
