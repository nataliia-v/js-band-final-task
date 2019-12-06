import { createSelector } from 'reselect';

const getUserModuleState = state => state.auth;

export const getIsAuthorizedUser = createSelector(
  getUserModuleState,
  authState => authState.isAuthorized
);

export const getAuthorizedError = createSelector(
  getUserModuleState,
  authState => authState.error
);
