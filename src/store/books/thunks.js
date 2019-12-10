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

export const fetchBook = ({ id }) => {
  return async dispatch => {
    dispatch(startBooksFetching());

    try {
      const data = await booksService.getBook({ id });
      console.log(data);

      dispatch(fetchBooksSuccess(data));
    } catch (error) {
      dispatch(fetchBooksFailed(error));
    } finally {
      dispatch(stopBooksFetching());
    }
  };
};
