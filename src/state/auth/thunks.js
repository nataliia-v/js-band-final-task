import authService from 'services/AuthService';
import { initLayout } from 'state/layout/actions';
import {
  startLoginUser,
  stopLoginUser,
  loginUserFailed,
  loginUserSuccess,
  authSuccess
} from './actions';

export const signInUser = (history, { username }) => {
  return async dispatch => {
    dispatch(startLoginUser());

    try {
      const data = await authService.authUser({ username });

      localStorage.setItem('authToken', data.token);
      dispatch(loginUserSuccess(data));

      history.push('/');
    } catch (error) {
      dispatch(loginUserFailed(error));
    } finally {
      dispatch(stopLoginUser());
    }
  };
};

export const auth = () => {
  return dispatch => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      dispatch(authSuccess());
    }

    dispatch(initLayout());
  };
};
