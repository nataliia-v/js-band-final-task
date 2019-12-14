import { combineReducers } from 'redux';

import books from 'store/books/reducer';
import filters from 'store/filters/reducer';
import auth from 'store/auth/reducer';
import layout from 'store/layout/reducer';
import cart from 'store/cart/reducer';

export default combineReducers({
  books,
  cart,
  filters,
  auth,
  layout
});
