import { get } from 'lodash';

import { logout } from 'store/auth/thunks';

export const unauthorizedMiddleware = store => next => action => {
  if (get(action, 'payload.error.statusCode') === 401) {
    store.dispatch(logout());
  }

  next(action);
};
