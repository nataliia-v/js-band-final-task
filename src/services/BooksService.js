import BaseApiService from './BaseApiService';

class BooksService extends BaseApiService {
  async getBooks() {
    return this.get({ url: '/books' });
  }

  async getBook({ id }) {
    return this.get({ url: `/books/${id}` });
  }
}

const booksService = new BooksService();

export default booksService;
