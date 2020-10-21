import React, { useState, createContext, useEffect } from 'react';
import { logIn } from '../services/api';

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@WILLauth:user')));
  }, []);

  async function signIn() {
    const response = await logIn();
    setUser(response.user);
    localStorage.setItem('@WILLauth:user', JSON.stringify(response.user));
  }

  async function signOut() {
    localStorage.removeItem('@WILLauth:user');
    setUser(null);
  }

  return (
    <authContext.Provider
      value={{
        signed: !!user, user, signIn, signOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
