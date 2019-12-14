import { allOption } from 'utils/constants';
import { SET_FILTER } from './types';

const initialState = {
  search: '',
  price: allOption.value
};

export default (store = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_FILTER: {
      return {
        ...store,
        [payload.name]: payload.value
      };
    }
    default:
      return store;
  }
};
