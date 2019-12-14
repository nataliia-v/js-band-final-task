import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Routes from 'pages/Routes';
import Toasts from 'containers/Toasts/Toasts';

const internName = 'Nataliia Verbenska';

function App() {
  return (
    <HashRouter>
      <Header internName={internName} />
      <Routes />
      <Toasts />
    </HashRouter>
  );
}

export default App;
