import authService from 'services/AuthService';
import LocalStorageService from 'services/LocalStorageService';

import { initLayout } from 'store/layout/actions';
import {
  startLoginUser,
  stopLoginUser,
  loginUserFailed,
  loginUserSuccess,
  authSuccess,
  logoutSuccess
} from './actions';

const localStorageService = new LocalStorageService();

export const signInUser = (history, { username }) => {
  return async dispatch => {
    dispatch(startLoginUser());

    try {
      const data = await authService.authUser({ username });

      localStorageService.setItem('authToken', data.token);
      localStorageService.setItem('username', data.username);
      localStorageService.setItem('avatar', data.avatar);
      dispatch(loginUserSuccess(data));

      history.push('/books');
    } catch (error) {
      dispatch(loginUserFailed(error));
    } finally {
      dispatch(stopLoginUser());
    }
  };
};

export const auth = () => {
  return dispatch => {
    const authToken = localStorageService.getItem('authToken');

    if (authToken) {
      const avatar = localStorageService.getItem('avatar');
      const username = localStorageService.getItem('username');

      dispatch(authSuccess({ avatar, username }));
    }

    dispatch(initLayout());
  };
};

export const logout = () => {
  return dispatch => {
    authService.clearAuthData();

    dispatch(logoutSuccess());
  };
};
