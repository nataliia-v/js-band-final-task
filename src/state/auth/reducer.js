import {
  START_LOGIN_USER,
  STOP_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './types';

const initialState = {
  userData: {},
  isAuthorized: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_USER:
      return {
        ...state,
        isAuthorized: false
      };
    case STOP_LOGIN_USER:
      return {
        ...state,
        isAuthorized: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userData: {
          username: action.payload.username,
          avatar: action.payload.avatar
        },
        isAuthorized: true
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
