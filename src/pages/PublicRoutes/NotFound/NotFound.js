import React from 'react';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>404</p>
      <p>This is not page you&apos;re looking for</p>
    </div>
  );
}

export default NotFound;
