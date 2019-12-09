import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Books from 'pages/PrivateRoutes/Books/Books';
import { connect } from 'react-redux';
import { getIsAuthorizedUser } from '../../state/auth/selectors';

const PrivateRoutes = () => {
  // if (!isAuthorized) {
  //   return <Redirect from="*" to="/signin" />
  // }

  return (
    <div>
      <Route path="/books" component={Books} />

      <Redirect from="/" to="/books" exact />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorizedUser(state)
});

export default connect(mapStateToProps)(PrivateRoutes);
