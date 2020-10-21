import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

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
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: 120,
    height: 120,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Dashboard Page</h1>
      <Avatar className={classes.purple}>WS</Avatar>
    </>

  );
};

export default Dashboard;
