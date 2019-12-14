import { ADD_TOAST, INIT_LAYOUT, REMOVE_TOAST } from './types';

export const initLayout = () => ({
  type: INIT_LAYOUT
});

export const addToast = toast => ({
  type: ADD_TOAST,
  payload: toast
});

export const removeToast = toastId => ({
  type: REMOVE_TOAST,
  payload: toastId
});
