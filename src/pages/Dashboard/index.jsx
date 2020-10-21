import React, { useContext } from 'react';
import { } from '@material-ui/core';
import { authContext } from '../../contexts/auth';

const Dashboard = () => {
  const { signOut } = useContext(authContext);

  function handleLogout() {
    signOut();
  }

  return (
    <>
      <h1>Dashboard Page</h1>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </>

  );
};

export default Dashboard;
