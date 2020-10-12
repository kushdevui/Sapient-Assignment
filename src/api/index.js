import { httpClient } from './httpClient';
import { launchApi } from './launchApi';

export function apiFactory(http) {
  return {
    launch: launchApi(http)
  };
}

const http = httpClient('https://api.spaceXdata.com/v3/');
export const api = apiFactory(http);
