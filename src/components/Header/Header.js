import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getIsAuthorizedUser, getUserData } from 'store/auth/selectors';
import { ReactComponent as CartIcon } from 'images/cart2.svg';

import { logout } from 'store/auth/thunks';

import styles from './Header.module.scss';

class Header extends Component {
  signOut = event => {
    event.preventDefault();

    this.props.actions.logout();
  };

  render() {
    const { internName, isAuthorized, userData } = this.props;

    return (
      <div className={styles.header}>
        <h1 className={styles.headerName}>JS BAND STORE/{internName}</h1>
        {isAuthorized && (
          <div className={styles.authorizedHeader}>
            <Link to="/cart">
              <CartIcon className={styles.cart} />
            </Link>

            <div>
              <button onClick={this.signOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>

            <div className={styles.userDataWrap}>
              <img
                className={styles.avatar}
                src={userData.avatar}
                alt="user avatar"
              />
              <p className={styles.username}>{userData.username}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorizedUser(state),
  userData: getUserData(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
