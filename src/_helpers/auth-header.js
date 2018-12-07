export function authHeader() {
  // return authorization header with basic auth credentials
  let user = JSON.parse(sessionStorage.getItem('user'));

  if (user && user.token) {
    return 'Bearer ' + user.token;
  } else {
    return {};
  }
}
