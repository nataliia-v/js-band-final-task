import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signInUser } from 'store/auth/thunks';
import { getIsLoadingUserLogin } from 'store/auth/selectors';

import { ReactComponent as UserAvatar } from 'images/user.svg';
import SignInForm from './components/SignInForm/SignInForm';

import styles from './SignIn.module.scss';

class SignIn extends Component {
  onSubmit = payload => {
    const { actions, history } = this.props;

    actions.signInUser(history, payload);
  };

  render() {
    const { isLoadingUserLogin } = this.props;

    return (
      <div className={styles.wrapper}>
        <UserAvatar className={styles.userAvatar} />
        <SignInForm
          onSubmit={this.onSubmit}
          isLoadingUserLogin={isLoadingUserLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingUserLogin: getIsLoadingUserLogin(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ signInUser }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
