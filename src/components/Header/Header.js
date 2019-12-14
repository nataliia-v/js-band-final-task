import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Button from 'components/Button/Button';
import { getIsAuthorizedUser, getUserData } from 'store/auth/selectors';
import { getTotalCartItems } from 'store/cart/selectors';
import { logout } from 'store/auth/thunks';

import CartLink from './component/CartLink/CartLink';

import styles from './Header.module.scss';

class Header extends Component {
  signOut = event => {
    event.preventDefault();

    this.props.actions.logout();
  };

  render() {
    const { internName, isAuthorized, userData, totalCartItems } = this.props;

    return (
      <div className={styles.header}>
        <Link to="/" className={styles.headerName}>
          <h1>JS BAND STORE/{internName}</h1>
        </Link>
        {isAuthorized && (
          <div className={styles.authorizedHeader}>
            <CartLink totalCartItems={totalCartItems} />

            <div>
              <Button onClick={this.signOut} className="btn btn-primary">
                Sign Out
              </Button>
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
  userData: getUserData(state),
  totalCartItems: getTotalCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
