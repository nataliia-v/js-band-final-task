import { createSelector } from 'reselect';

const getBooksModuleState = state => state.books;

export const getAllBooks = createSelector(
  getBooksModuleState,
  booksState => booksState.data
);
export const getCurrentBook = createSelector(
  getBooksModuleState,
  booksState => booksState.book
);

export const getBooksIsLoading = createSelector(
  getBooksModuleState,
  booksState => booksState.isLoading
);

export const getBooksError = createSelector(
  getBooksModuleState,
  booksState => booksState.error
);
