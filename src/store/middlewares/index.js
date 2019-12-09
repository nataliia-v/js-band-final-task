import { get } from 'lodash';
import { authFail } from 'store/auth/actions';

export const unauthorizedMiddleware = store => next => action => {
  if (get(action, 'payload.error.statusCode') === 401) {
    localStorage.removeItem('authToken');
    store.dispatch(authFail());
  }

  next(action);
};
