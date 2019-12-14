import {
  purchaseFailed,
  purchaseSuccess,
  startCartPurchase,
  stopCartPurchase
} from 'store/cart/actions';
import booksService from 'services/BooksService';
import { addToastThunk } from 'store/layout/thunks';
import { getCartBooksIds } from 'store/cart/selectors';

export const cartPurchase = () => {
  return async (dispatch, getState) => {
    const cartBooksIds = getCartBooksIds(getState());

    try {
      dispatch(startCartPurchase());

      const data = await booksService.purchaseBooks({ books: cartBooksIds });

      dispatch(purchaseSuccess());
      dispatch(addToastThunk({ message: data.message, timeout: 7 }));
    } catch (e) {
      dispatch(purchaseFailed(e));
    } finally {
      dispatch(stopCartPurchase());
    }
  };
};
