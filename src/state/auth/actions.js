import {
  START_LOGIN_USER,
  STOP_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './types';

export const startLoginUser = () => ({
  type: START_LOGIN_USER
});
export const stopLoginUser = () => ({
  type: STOP_LOGIN_USER
});
export const loginUserSucces = userData => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData
});
export const loginUserFailed = error => ({
  type: LOGIN_USER_FAILED,
  payload: error
});
