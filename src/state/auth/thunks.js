import {
  startLoginUser,
  stopLoginUser,
  loginUserFailed,
  loginUserSucces
} from './actions';
import booksStore from '../../components/services/booksStoreService';

export const signInUser = userData => {
  return async dispatch => {
    dispatch(startLoginUser());

    try {
      const data = await booksStore.authUser(userData.username);
      localStorage.setItem('token', data.token);
      dispatch(loginUserSucces(data));
      console.log(localStorage);
      console.log(data);
    } catch (error) {
      dispatch(loginUserFailed(error));
    } finally {
      dispatch(stopLoginUser());
    }
  };
};
