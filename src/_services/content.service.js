export const contentService = {
  create,
  getAll
};

function create(title, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
        body: JSON.stringify({ title, body })
    };

    return fetch(`/api/content/`, requestOptions)
        .then(handleResponse)
        .then(content => {
            return content;
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': authHeader()}
    };

    return fetch(`/api/content/`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.redirect('/');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function authHeader() {
  // return authorization header with basic auth credentials
  let user = JSON.parse(sessionStorage.getItem('user'));

  if (user && user.token) {
    return 'Bearer ' + user.token;
  } else {
    return {};
  }
}
