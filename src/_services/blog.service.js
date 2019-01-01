import { authHeader, handleResponse } from '../_helpers';

export const blogService = {
  create,
  getAll,
  getByCategory,
  find,
  getByPath,
  update,
  remove,
  getNewest,
  getArchive,
  getByMonth
};

function create(title, quote, photo, alt, content, credit, categories, path, older) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ title, quote, photo, alt, content, credit, categories, path, older })
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

function getByCategory(category) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog?category=${category}`, requestOptions).then(handleResponse);
}

function find(query) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog?query=${query}`, requestOptions).then(handleResponse);
}

function getByPath(path) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog/${path}`, requestOptions).then(handleResponse);
}

function update(title, quote, photo, alt, content, credit, categories, path, older, newer) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader() },
    body: JSON.stringify({ title, quote, photo, alt, content, credit, categories, path, older, newer })
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

function getArchive() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog/archive`, requestOptions).then(handleResponse);
}

function getByMonth(month) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/blog?month=${month}`, requestOptions).then(handleResponse);
}
