import React from 'react';
import classNames from 'classnames';

import styles from './KeyValuePair.module.scss';

function KeyValuePair({ title, value, classes = {} }) {
  const wrapperClass = classNames(styles.wrapper, classes.root);
  const titleClass = classNames(styles.title, classes.title);
  const valueClass = classNames(styles.value, classes.value);

  return (
    <div className={wrapperClass}>
      <div className={titleClass}>{title}</div>
      <div className={valueClass}>{value}</div>
    </div>
  );
}

export default KeyValuePair;
