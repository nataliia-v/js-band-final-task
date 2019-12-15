import LocalStorageService from './LocalStorageService';

const localStorageService = new LocalStorageService();

class BaseApiService {
  apiBase = 'https://js-band-api.glitch.me';

  async makeRequest({ method, url, body = {}, isPrivate = true }) {
    const headers = {
      'Content-type': 'application/json'
    };

    if (isPrivate) {
      const authToken = localStorageService.getItem('authToken');
      headers.Authorization = `Bearer ${authToken}`;
    }

    const fetchConfig = {
      method,
      body: JSON.stringify(body),
      headers
    };

    if (method === 'get') {
      delete fetchConfig.body;
    }

    const response = await fetch(`${this.apiBase}${url}`, fetchConfig);

    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw {
        message: `Could not fetch ${url}, received ${response.status}`,
        error: {
          statusCode: response.status,
          url: response.url
        }
      };
    }
    return response.json();
  }

  async post({ url, body, isPrivate }) {
    return this.makeRequest({ method: 'post', url, body, isPrivate });
  }

  async get({ url, isPrivate }) {
    return this.makeRequest({ method: 'get', url, isPrivate, body: undefined });
  }
}

export default BaseApiService;
