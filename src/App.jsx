import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { AuthProvider } from './contexts/auth';
import './App.css';
import MenuBar from './components/MenuBar';
import Routes from './routes';

function App() {
  return (
    <Container maxWidth="lg">

      <Router>

        <AuthProvider>
          <MenuBar />
          <Routes />
        </AuthProvider>

      </Router>
    </Container>
  );
}

export default App;
