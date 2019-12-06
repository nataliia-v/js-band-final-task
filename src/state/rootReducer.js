import { combineReducers } from 'redux';

import books from 'state/books/reducer';
import filters from 'state/filters/reducer';
import auth from 'state/auth/reducer';

export default combineReducers({
  books,
  filters,
  auth
});
