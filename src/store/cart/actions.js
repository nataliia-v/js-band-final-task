import { ADD_BOOK_TO_CART, UPDATE_BOOK_COUNT_IN_CART } from './types';

export const addBookToCart = payload => ({
  type: ADD_BOOK_TO_CART,
  payload
});

export const updateBookCountInCart = payload => ({
  type: UPDATE_BOOK_COUNT_IN_CART,
  payload
});
