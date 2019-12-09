class BaseApiService {
  _apiBase = 'https://js-band-api.glitch.me';

  async makeRequest(method, url, body = {}) {
    const response = await fetch(`${this._apiBase}${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return response.json();
  }

  async post(url, body) {
    return this.makeRequest('post', url, body);
  }

  async get(url) {
    return this.makeRequest('get', url);
  }
}

export default BaseApiService;
