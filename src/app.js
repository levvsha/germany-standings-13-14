/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate code
 *
 */

// Import all the third party stuff
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';

const isProd = process.env.NODE_ENV === 'production'; //eslint-disable-line no-undef

// Needed for React Developer Tools
if (!isProd) {
  window.React = React;
}

const history = createHistory();
const store = configureStore(history);
const mountNode = document.getElementById('app');

const renderApp = () => {
  const App = require('./containers/App/App').default; //eslint-disable-line no-undef

  render((
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  ), mountNode);
};

if (module.hot) { //eslint-disable-line no-undef
  const reRenderApp = () => {
    try {
      renderApp();
    } catch (error) {
      const RedBox = require('redbox-react').default; //eslint-disable-line no-undef

      render(<RedBox error={error} />, mountNode);
    }
  };

  module.hot.accept('./containers/App/App', () => { //eslint-disable-line no-undef
    setImmediate(() => { //eslint-disable-line no-undef
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode);

      reRenderApp();
    });
  });
}

renderApp();
