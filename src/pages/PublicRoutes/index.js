import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from 'pages/PublicRoutes/SignIn/SignIn';
import NotFound from 'pages/PublicRoutes/NotFound/NotFound';

const PublicRoutes = () => {
  return (
    <>
      <Route path="/signin" component={SignIn} exact />
      <Route path={['/404', '*']}>
        <NotFound />
      </Route>
    </>
  );
};

export default PublicRoutes;
