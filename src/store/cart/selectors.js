import { createSelector } from 'reselect';

const getCartModuleState = state => state.cart;

export const getBooks = createSelector(
  getCartModuleState,
  cartState => cartState.data
);

export const getTotalPrice = createSelector(
  getCartModuleState,
  cartState => cartState.totalPrice
);
