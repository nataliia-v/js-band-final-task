import React from 'react';
import { connect } from 'react-redux';

import { getToasts } from 'store/layout/selectors';
import Toast from 'components/Toast/Toast';

import styles from './Toasts.module.scss';

function Toasts({ toasts }) {
  return (
    <div className={styles.wrapper}>
      {toasts.map(toast => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  toasts: getToasts(state)
});

export default connect(mapStateToProps, null)(Toasts);
