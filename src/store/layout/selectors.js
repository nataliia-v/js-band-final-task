import { createSelector } from 'reselect';

const getState = state => state.layout;

export const getIsInitializedLayout = createSelector(
  getState,
  state => state.isInitialised
);

export const getToasts = createSelector(getState, state => state.toasts);
