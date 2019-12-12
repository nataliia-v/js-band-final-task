import {
  START_BOOKS_FETCHING,
  STOP_BOOKS_FETCHING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_COUNT
} from './types';

export const startBooksFetching = () => ({
  type: START_BOOKS_FETCHING
});

export const stopBooksFetching = () => ({
  type: STOP_BOOKS_FETCHING
});

export const fetchBooksSuccess = payload => ({
  type: FETCH_BOOKS_SUCCESS,
  payload
});

export const fetchBookSuccess = payload => ({
  type: FETCH_BOOK_SUCCESS,
  payload
});
export const fetchBooksFailed = error => ({
  type: FETCH_BOOKS_FAILED,
  payload: error
});

export const updateBookCount = payload => ({
  type: UPDATE_BOOK_COUNT,
  payload
});
