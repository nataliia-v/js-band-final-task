import { INIT_LAYOUT } from './types';

const initialState = {
  isInitialised: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LAYOUT:
      return {
        ...state,
        isInitialised: true
      };
    default:
      return state;
  }
};

export default reducer;
