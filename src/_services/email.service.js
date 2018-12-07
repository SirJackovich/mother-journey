import { handleResponse } from '../_helpers';

export const emailService = {
  email
};

function email(name, email, subject, message) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
  };

  return fetch(`/api/email/`, requestOptions).then(handleResponse);
}


