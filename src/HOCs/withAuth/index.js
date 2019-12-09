import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getIsAuthorizedUser } from 'state/auth/selectors';

const withAuth = ({ isPublic }) => WrappedComponent => {
  const WithAuth = ({ isAuthorized, ...props }) => {
    if (!isAuthorized && isPublic) {
      return <WrappedComponent {...props} />;
    }

    if (isAuthorized && isPublic) {
      return <Redirect from="*" to="/" />;
    }

    if (isAuthorized) {
      return <WrappedComponent {...props} />;
    }
    return <Redirect from="*" to="/signin" />;
  };

  const mapStateToProps = state => ({
    isAuthorized: getIsAuthorizedUser(state)
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
