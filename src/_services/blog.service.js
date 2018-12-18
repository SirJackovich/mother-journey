import { authHeader, handleResponse } from '../_helpers';

export const blogService = {
  create,
  getAll,
  getByPath,
  update,
  remove,
  getNewest
};

function create(title, quote, photo, content, credit, path, older) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ title, quote, photo, content, credit, path, older })
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

function update(title, quote, photo, content, credit, path, older, newer) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ title, quote, photo, content, credit, path, older, newer })
  };

  return fetch(`/api/blog/${path}`, requestOptions).then(handleResponse);
}

function remove(path) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Authorization': authHeader() }
  };

  return fetch(`/api/blog/${path}`, requestOptions).then(handleResponse);
}

function getNewest() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog/newest`, requestOptions).then(handleResponse);
}