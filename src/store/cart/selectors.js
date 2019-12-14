import { createSelector } from 'reselect';

const getCartModuleState = state => state.cart;

export const getCartBooks = createSelector(
  getCartModuleState,
  cartState => cartState.data
);

export const getCartBooksIds = createSelector(getCartBooks, books =>
  books.map(book => book.id)
);

export const getCartBookById = createSelector(
  getCartBooks,
  (_, bookId) => bookId,
  (cartBooks, bookId) => {
    return cartBooks.find(book => book.id === bookId);
  }
);

export const getTotalCartItems = createSelector(getCartBooks, books =>
  books.reduce((acc, book) => acc + Number(book.totalCount), 0)
);
