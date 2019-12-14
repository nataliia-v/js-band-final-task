import { get } from 'lodash';

import { logout } from 'store/auth/thunks';

export const unauthorizedMiddleware = store => next => action => {
  const statusCode = get(action, 'payload.error.statusCode');

  if (statusCode === 401) {
    store.dispatch(logout());
  }

  next(action);
};
