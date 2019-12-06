import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import SignIn from '../../pages/SignIn/SignIn';

const internName = 'Nataliia Verbenska';

function App() {
  return (
    <div>
      <Header internName={internName} />
      <HashRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Redirect from="*" to="/signin" exact />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
