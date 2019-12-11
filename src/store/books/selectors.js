import { createSelector } from 'reselect';

const getBooksModuleState = state => state.books;

export const getAllBooks = createSelector(
  getBooksModuleState,
  booksState => booksState.data
);

export const getBooksIsLoading = createSelector(
  getBooksModuleState,
  booksState => booksState.isLoading
);

export const getBooksIsError = createSelector(
  getBooksModuleState,
  booksState => booksState.isError
);
