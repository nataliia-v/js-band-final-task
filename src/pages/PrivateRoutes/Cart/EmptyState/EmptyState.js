import React from 'react';
import { ReactComponent as CartIcon } from 'images/cart2.svg';

import styles from './EmptyState.module.scss';

function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <CartIcon className={styles.cartIcon} />
      <div className={styles.text}>Cart empty...</div>
    </div>
  );
}

export default EmptyState;
