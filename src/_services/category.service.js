import { authHeader, handleResponse } from '../_helpers';

export const categoryService = {
  create,
  getAll,
  remove
};

function create(name) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ name })
  };

  return fetch(`/api/category/`, requestOptions)
    .then(handleResponse)
    .then(category => {
      return category;
    });
}

function getAll() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/category/`, requestOptions).then(handleResponse);
}

function remove(name) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Authorization': authHeader() }
  };

  return fetch(`/api/category/${name}`, requestOptions).then(handleResponse);
}
