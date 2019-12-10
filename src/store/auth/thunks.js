import authService from 'services/AuthService';
import { initLayout } from 'store/layout/actions';
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

      // const storageObject = {'authToken': data.token, 'username': data.username};
      //
      // localStorage.setItem('userData', JSON.stringify(storageObject));
      // console.log(localStorage);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('avatar', data.avatar);
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
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      dispatch(authSuccess());
    }

    dispatch(initLayout());
  };
};
