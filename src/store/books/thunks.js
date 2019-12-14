import { get } from 'lodash';
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

export const fetchBook = (history, { id }) => {
  return async dispatch => {
    dispatch(startBooksFetching());

    try {
      const data = await booksService.getBook({ id });
      dispatch(fetchBooksSuccess([data]));
    } catch (error) {
      if (get(error.error, 'statusCode') === 404) {
        history.push('/404');
      }

      dispatch(fetchBooksFailed(error));
    } finally {
      dispatch(stopBooksFetching());
    }
  };
};
