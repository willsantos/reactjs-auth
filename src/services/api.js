/* eslint-disable import/prefer-default-export */

export function logIn(username, password) {
  if (username !== 'adm@example.com' || password !== '123') {
    return false;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'askdjsakdjjasbfjn21j1k3k12jiujdsaf89sad',
        user: {
          name: 'Admin',
          email: 'adm@example.com',
        },
      });
    }, 1500);
  });
}
