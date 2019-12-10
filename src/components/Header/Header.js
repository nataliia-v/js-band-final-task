import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getIsAuthorizedUser } from 'store/auth/selectors';
import { ReactComponent as Cart } from 'images/cart2.svg';

import styles from './Header.module.scss';

class Header extends Component {
  signOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
  };

  render() {
    const { internName, isAuthorized } = this.props;
    const bookPath = `/signin`;

    const userName = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');

    return (
      <div className={styles.header}>
        <h1 className={styles.headerName}>JS BAND STORE/{internName}</h1>
        {isAuthorized && (
          <div className={styles.authorizedHeader}>
            <Cart className={styles.cart} />
            <Link
              onClick={this.signOut}
              to={bookPath}
              className="btn btn-primary"
            >
              Sign Out
            </Link>
            <div className={styles.userDataWrap}>
              <img className={styles.avatar} src={avatar} alt="user avatar" />
              <p className={styles.username}>{userName}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorizedUser(state)
});

export default connect(mapStateToProps)(Header);
