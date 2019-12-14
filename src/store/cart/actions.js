import {
  ADD_BOOK_TO_CART,
  START_CART_PURCHASE,
  STOP_CART_PURCHASE,
  PURCHASE_SUCCESS,
  PURCHASE_FAIL
} from './types';

export const addBookToCart = payload => ({
  type: ADD_BOOK_TO_CART,
  payload
});

export const startCartPurchase = () => ({
  type: START_CART_PURCHASE
});

export const stopCartPurchase = () => ({
  type: STOP_CART_PURCHASE
});

export const purchaseSuccess = () => ({
  type: PURCHASE_SUCCESS
});

export const purchaseFailed = error => ({
  type: PURCHASE_FAIL,
  payload: error
});
