import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getIsAuthorizedUser } from 'store/auth/selectors';

const withAuth = ({ isPublic }) => WrappedComponent => {
  const WithAuth = ({ isAuthorized, ...props }) => {
    switch (true) {
      case !isAuthorized && isPublic:
        return <WrappedComponent {...props} />;
      case isAuthorized && isPublic:
        return <Redirect from="*" to="/" />;
      case isAuthorized:
        return <WrappedComponent {...props} />;
      default:
        return <Redirect from="*" to="/signin" />;
    }
  };

  const mapStateToProps = state => ({
    isAuthorized: getIsAuthorizedUser(state)
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
