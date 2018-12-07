import { authHeader, handleResponse } from '../_helpers';

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

