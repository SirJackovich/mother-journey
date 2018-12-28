import { handleResponse } from '../_helpers';

export const imageService = {
  info
};

function info(filename) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`/api/image/info/${filename}`, requestOptions).then(handleResponse);
}
