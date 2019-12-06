import React from 'react';
import styles from './Header.module.scss';

function Header({ internName }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerName}>JS BAND STORE/{internName}</h1>
    </div>
  );
}

export default Header;
