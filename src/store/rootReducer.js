import { combineReducers } from 'redux';

import books from 'store/books/reducer';
import filters from 'store/filters/reducer';
import auth from 'store/auth/reducer';
import layout from 'store/layout/reducer';

export default combineReducers({
  books,
  filters,
  auth,
  layout
});
