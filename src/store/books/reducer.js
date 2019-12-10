import {
  START_BOOKS_FETCHING,
  STOP_BOOKS_FETCHING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED
} from './types';

const initialState = {
  data: [],
  isLoading: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_BOOKS_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: null
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
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
