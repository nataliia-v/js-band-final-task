import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { userPostFetch } from 'state/auth/actions';
import FormField from '../../../../components/Forms/FormField/FormField';
import Input from '../../../../components/Forms/Input/Input';

import styles from './SignInForm.module.scss';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        username: ''
      }
    };
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState(({ formValues }) => ({
      formValues: { ...formValues, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const { formValues } = this.state;
    this.props.userPostFetch(formValues);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormField
          label="Username"
          control={
            <Input
              name="username"
              value={this.state.username}
              placeholder="type Username"
              onChange={this.handleChange}
              required
            />
          }
        />
        <button
          type="submit"
          className={classNames(styles.btn, 'btn btn-outline-primary')}
        >
          Sign-In
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: formValues => dispatch(userPostFetch(formValues))
});

export default connect(null, mapDispatchToProps)(SignInForm);
