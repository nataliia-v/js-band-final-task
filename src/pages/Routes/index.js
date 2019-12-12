import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { auth } from 'store/auth/thunks';
import { getIsInitializedLayout } from 'store/layout/selectors';
import SignIn from 'pages/PublicRoutes/SignIn/SignIn';
import NotFound from 'pages/PublicRoutes/NotFound/NotFound';
import Books from 'pages/PrivateRoutes/Books/Books';
import BookDetails from 'pages/PrivateRoutes/BookDetails/BookDetails';
import Cart from 'pages/PrivateRoutes/Cart/Cart';

import withAuth from 'HOCs/withAuth';

class Routes extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.auth();
  }

  render() {
    const { isInitializedLayout } = this.props;

    return (
      <>
        {isInitializedLayout && (
          <Switch>
            <Route
              path="/signin"
              component={withAuth({ isPublic: true })(SignIn)}
              exact
            />

            <Route path="/books" component={withAuth({})(Books)} exact />
            <Route
              path="/books/:id"
              component={withAuth({})(BookDetails)}
              exact
            />
            <Route path="/cart" component={withAuth({})(Cart)} exact />

            <Redirect from="/" to="/books" exact />

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isInitializedLayout: getIsInitializedLayout(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ auth }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
