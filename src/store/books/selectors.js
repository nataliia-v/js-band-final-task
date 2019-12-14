import { createSelector } from 'reselect';

const getBooksModuleState = state => state.books;

export const getAllBooks = createSelector(
  getBooksModuleState,
  booksState => booksState.data
);

export const getBookById = createSelector(
  getAllBooks,
  (_, bookId) => bookId,
  (allBooks, bookId) => {
    return allBooks.find(book => book.id === bookId);
  }
);

export const getBooksIsLoading = createSelector(
  getBooksModuleState,
  booksState => booksState.isLoading
);

export const getBooksIsError = createSelector(
  getBooksModuleState,
  booksState => booksState.isError
);
