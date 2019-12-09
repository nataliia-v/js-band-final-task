import {
  START_LOGIN_USER,
  STOP_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  AUTH_SUCCESS
} from './types';

const initialState = {
  isLoading: false,
  isAuthorized: false,
  userData: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_USER:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOGIN_USER:
      return {
        ...state,
        isLoading: false
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
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthorized: true
      };
    default:
      return state;
  }
};

export default reducer;
