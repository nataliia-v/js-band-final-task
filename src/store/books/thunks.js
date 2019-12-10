import booksService from 'services/BooksService';

import {
  startBooksFetching,
  stopBooksFetching,
  fetchBooksSuccess,
  fetchBooksFailed
} from './actions';

export const fetchBooks = () => {
  return async dispatch => {
    dispatch(startBooksFetching());

    try {
      const data = await booksService.getBooks();

      dispatch(fetchBooksSuccess(data));
    } catch (error) {
      dispatch(fetchBooksFailed(error));
    } finally {
      dispatch(stopBooksFetching());
    }
  };
};
