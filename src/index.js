import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import configureStore from 'state/configureStore';

import './index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
