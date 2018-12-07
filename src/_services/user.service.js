import { handleResponse } from '../_helpers';

export const userService = {
  login,
  logout
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`/api/auth/`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in session storage
        // to keep user logged in between page refreshes
        sessionStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from session storage to log user out
  sessionStorage.removeItem('user');
}
