import { authHeader, handleResponse } from '../_helpers';

export const blogService = {
  create,
  getAll,
  getByPath,
};

function create(title, quote, photo, content, credit, path) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ title, quote, photo, content, credit, path })
  };

  return fetch(`/api/blog/`, requestOptions)
    .then(handleResponse)
    .then(blog => {
      return blog;
    });
}

function getAll() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog/`, requestOptions).then(handleResponse);
}

function getByPath(path) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog/${path}`, requestOptions).then(handleResponse);
}
