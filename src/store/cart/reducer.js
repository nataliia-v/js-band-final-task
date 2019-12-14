import {
  ADD_BOOK_TO_CART,
  START_CART_PURCHASE,
  STOP_CART_PURCHASE,
  PURCHASE_SUCCESS
} from './types';

const initialState = {
  data: [],
  totalPrice: 0,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_CART_PURCHASE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case STOP_CART_PURCHASE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case PURCHASE_SUCCESS: {
      return {
        ...state,
        data: [],
        totalPrice: 0
      };
    }
    case ADD_BOOK_TO_CART:
      const data = [
        ...state.data.filter(book => book.id !== action.payload.id),
        action.payload
      ];

      return {
        ...state,
        data,
        totalPrice: data.reduce((acc, book) => acc + Number(book.totalPrice), 0)
      };
    default:
      return state;
  }
};
