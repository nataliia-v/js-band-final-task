import React, { Component } from 'react';

import FormField from 'components/Forms/FormField/FormField';
import Input from 'components/Forms/Input/Input';
import Button from 'components/Button/Button';

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
    const { onSubmit } = this.props;

    onSubmit(formValues);
  };

  render() {
    const { isLoadingUserLogin } = this.props;
    const { formValues } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormField
          label="Username"
          control={
            <Input
              name="username"
              value={formValues.username}
              placeholder="type Username"
              onChange={this.handleChange}
              minLength={4}
              maxLength={16}
              required
            />
          }
        />
        <Button type="submit" classes={{ root: styles.btn }}>
          {isLoadingUserLogin ? <div className="spinner-border" /> : 'Sign-In'}
        </Button>
      </form>
    );
  }
}

export default SignInForm;
