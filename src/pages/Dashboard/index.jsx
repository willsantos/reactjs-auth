import React, { useContext } from 'react';
import { authContext } from '../../contexts/auth';

const Dashboard = () => {
  const { signOut } = useContext(authContext);

  function handleLogout() {
    signOut();
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
