import {
  START_BOOKS_FETCHING,
  STOP_BOOKS_FETCHING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_COUNT
} from './types';

const initialState = {
  data: [],
  isLoading: true,
  isError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_BOOKS_FETCHING:
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    case STOP_BOOKS_FETCHING:
      return {
        ...state,
        isLoading: false
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        data: [action.payload]
      };
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        isError: action.payload
      };
    case UPDATE_BOOK_COUNT:
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
