import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Router>

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Router>
  );
}

export default App;
