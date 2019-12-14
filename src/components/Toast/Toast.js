import React from 'react';
import classNames from 'classnames';

import styles from './Toast.module.scss';

function Toast({ message }) {
  const wrapperClass = classNames(styles.wrapper, 'toast');

  return (
    <div className={wrapperClass}>
      <div className="toast-body">{message}</div>
    </div>
  );
}

export default Toast;
