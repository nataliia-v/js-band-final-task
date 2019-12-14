import { INIT_LAYOUT, ADD_TOAST, REMOVE_TOAST } from './types';

const initialState = {
  isInitialised: false,
  toasts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LAYOUT:
      return {
        ...state,
        isInitialised: true
      };
    case ADD_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };
    }
    case REMOVE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
};

export default reducer;
