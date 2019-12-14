import { createSelector } from 'reselect';
import { getFilters } from 'store/filters/selectors';
import { parseJson } from 'utils/helpers';
import { allOption } from 'utils/constants';

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

export const getFilteredBooks = createSelector(
  getAllBooks,
  getFilters,
  (allBooks, filters) => {
    const filtersToApply = Object.keys(filters).filter(
      filterKey => filters[filterKey]
    );

    return allBooks.filter(bookItem => {
      return filtersToApply.every(filterName => {
        switch (filterName) {
          case 'search':
            return new RegExp(filters.search, 'i').test(bookItem.title);
          case 'price': {
            const priceFilter = parseJson(filters.price);
            const { min, max } = priceFilter;

            if (priceFilter === allOption.value) return true;

            if (min && max) {
              return bookItem.price >= min && bookItem.price <= max;
            }
            if (!min && max) {
              return bookItem.price <= max;
            }
            if (!max && min) {
              return bookItem.price >= min;
            }
            return true;
          }
          default:
            return true;
        }
      });
    });
  }
);
