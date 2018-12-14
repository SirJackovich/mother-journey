export function logout() {
  // remove user from session storage to log user out
  sessionStorage.removeItem('user');
}
