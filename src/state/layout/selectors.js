import { createSelector } from 'reselect';

const getState = state => state.layout;

export const getIsInitializedLayout = createSelector(
  getState,
  state => state.isInitialised
);
