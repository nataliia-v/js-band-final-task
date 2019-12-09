import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signInUser } from 'state/auth/thunks';
import { getIsLoadingUserLogin } from 'state/auth/selectors';

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
        <img
          width="140px"
          src="https://png2.cleanpng.com/sh/cd1d4c037673afffdd5fd49b8040345e/L0KzQYm3VsI3N6Z8i5H0aYP2gLBuTfF3aaVmip9Ac3X1PbT2jgB2fJZ3Rdtsb372PcT2hwR4aaNqRdZudnXvf8Hskr02amQ3T9VsOXPmQYbtV745P2M8SqkDMEG4Q4G3U8U1OGI9S6g3cH7q/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png"
          alt="user"
        />
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
