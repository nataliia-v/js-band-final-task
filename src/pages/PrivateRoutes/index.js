import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Books from 'pages/PrivateRoutes/Books/Books';
import BookDetails from 'pages/PrivateRoutes/BookDetails/BookDetails';
import { getIsAuthorizedUser } from 'store/auth/selectors';

const PrivateRoutes = () => {
  return (
    <div>
      <Route path="/books" component={Books} />
      <Route path="/books/:id" component={BookDetails} />

      <Redirect from="/" to="/books" exact />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorizedUser(state)
});

export default connect(mapStateToProps)(PrivateRoutes);
