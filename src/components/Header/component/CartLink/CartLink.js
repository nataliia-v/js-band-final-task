import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as CartIcon } from 'images/cart2.svg';

import styles from './CartLink.module.scss';

function CartLink({ totalCartItems }) {
  const badgeClass = classNames(styles.badge, 'badge badge-dark');

  return (
    <Link to="/cart" className={styles.wrapper}>
      <CartIcon className={styles.cartIcon} />
      <span className={badgeClass}>{totalCartItems}</span>
    </Link>
  );
}

export default CartLink;
