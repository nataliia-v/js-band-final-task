import { createSelector } from 'reselect';

const getUserModuleState = state => state.auth;

export const getIsAuthorizedUser = createSelector(
  getUserModuleState,
  authState => authState.isAuthorized
);

export const getIsLoadingUserLogin = createSelector(
  getUserModuleState,
  authState => authState.isLoading
);

export const getAuthorizedError = createSelector(
  getUserModuleState,
  authState => authState.error
);

export const getUserData = createSelector(
  getUserModuleState,
  authState => authState.userData
);
