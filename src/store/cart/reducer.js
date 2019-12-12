import { ADD_BOOK_TO_CART, UPDATE_BOOK_COUNT_IN_CART } from './types';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      if (state.data.length > 0) {
        return {
          ...state,
          data: state.data.map(book => {
            if (Number(book.id) === Number(action.payload.id)) {
              return {
                ...book,
                ...(book.currentCount =
                  Number(book.currentCount) +
                  Number(action.payload.currentCount)),
                ...(book.totalPrice =
                  Number(book.totalPrice) + Number(action.payload.totalPrice))
              };
            }
            console.log('hello');
          })
        };
      }
      return {
        ...state,
        data: [...state.data, action.payload]
      };

      // return {
      //   ...state,
      //   data: state.data.map(book => {
      //     if (Number(book.id) === Number(action.payload.id)) {
      //       return {
      //         ...book,
      //             ...book.currentCount = Number(book.currentCount) + Number(action.payload.currentCount),
      //             ...book.totalPrice = Number(book.totalPrice) + Number(action.payload.totalPrice)
      //       }
      //     } else {
      //       return {
      //         book,
      //
      //         ...action.payload
      //       }
      //     }
      //   } ),
      // };
      // return {
      //   ...state,
      //   data: state.data.map(book => book.id === action.payload.id ? ({
      //     ...book,
      //     ...book.currentCount = Number(book.currentCount) + Number(action.payload.currentCount),
      //     ...book.totalPrice = Number(book.totalPrice) + Number(action.payload.totalPrice)
      //   }) : book),
      //
      // };

      //
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    //
    // return {
    //   ...state,
    //   data: [...state.data, action.payload],
    // };

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
