import { addToast, removeToast } from 'store/layout/actions';
import { wait } from 'utils/helpers';

export const addToastThunk = ({ message, timeout = 3 }) => {
  return async dispatch => {
    const id = Date.now();

    dispatch(addToast({ id, message }));

    await wait(timeout);

    dispatch(removeToast({ id }));
  };
};
