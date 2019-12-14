import React from 'react';

import styles from './ErrorIndicator.module.scss';

const ErrorIndicator = () => {
  return (
    <div className={styles.errorIndicator}>
      <img
        className={styles.icon}
        src="https://cdn.windowsreport.com/wp-content/uploads/2019/02/Ddkmd.sys-blue-screen-errors-in-Windows.jpg"
        alt="error icon"
      />
      <p>Oops...</p>
      <p>Something went wrong. Please, try reloading the page.</p>
    </div>
  );
};

export default ErrorIndicator;
