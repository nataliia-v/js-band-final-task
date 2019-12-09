import {
  START_LOGIN_USER,
  STOP_LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  AUTH_SUCCESS,
  AUTH_FAIL
} from './types';

export const startLoginUser = () => ({
  type: START_LOGIN_USER
});
export const stopLoginUser = () => ({
  type: STOP_LOGIN_USER
});
export const loginUserSuccess = userData => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData
});
export const loginUserFailed = error => ({
  type: LOGIN_USER_FAILED,
  payload: error
});
export const authSuccess = () => ({
  type: AUTH_SUCCESS
});
export const authFail = () => ({
  type: AUTH_FAIL
});
