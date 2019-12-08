class BookssStoreService {
  _apiBase = 'https://js-band-api.glitch.me';

  async postResource(url, body, method) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async authUser(username) {
    return await this.postResource(
      `/signin`,
      JSON.stringify({ username }),
      'POST'
    );
  }
}

const booksStore = new BookssStoreService();

export default booksStore;
