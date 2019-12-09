import React from 'react';

import Header from 'components/Header/Header';
import Routes from 'pages/Routes';

const internName = 'Nataliia Verbenska';

function App() {
  return (
    <div>
      <Header internName={internName} />
      <Routes />
    </div>
  );
}

export default App;
