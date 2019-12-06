import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import SignIn from '../../pages/SignIn/SignIn';

const internName = 'Nataliia Verbenska';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  render() {
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
}

export default App;
