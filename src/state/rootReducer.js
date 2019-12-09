import { combineReducers } from 'redux';

import books from 'state/books/reducer';
import filters from 'state/filters/reducer';
import auth from 'state/auth/reducer';
import layout from 'state/layout/reducer';

export default combineReducers({
  books,
  filters,
  auth,
  layout
});
