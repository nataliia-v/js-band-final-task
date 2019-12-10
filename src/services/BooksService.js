import BaseApiService from './BaseApiService';

class BooksService extends BaseApiService {
  async getBooks() {
    return this.get({ url: '/books' });
  }
}

const booksService = new BooksService();

export default booksService;
