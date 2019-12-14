import {
  ADD_BOOK_TO_CART,
  UPDATE_BOOK_COUNT_IN_CART,
  CALCULATE_TOTAL_PRICE
} from './types';

const initialState = {
  data: [],
  totalPrice: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      // return {
      //   ...state,
      //   data: [
      //     action.payload,
      //     ...state.data.filter(book => Number(book.id) !== Number(action.payload.id)) ]
      // };
      return {
        ...state,
        data: [
          action.payload,
          ...state.data.filter(
            book => Number(book.id) !== Number(action.payload.id)
          )
        ]
      };

    // return {
    //   ...state,
    //   data: [...state.data, action.payload],
    // };

    case CALCULATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.data.reduce(
          (accumulator, currentValue) =>
            Number(accumulator) + Number(currentValue.totalPrice),
          0
        )
      };

    case UPDATE_BOOK_COUNT_IN_CART:
      return {
        ...state,
        data: state.data.map(book =>
          book.id === action.payload.id
            ? {
                ...book,
                ...(book.count -= action.payload.currentCount)
              }
            : book
        )
      };

    default:
      return state;
  }
};
