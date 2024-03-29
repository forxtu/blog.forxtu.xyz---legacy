import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// import createStore from './src/state/store';

import configureStore from './src/state';

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
// exports.onInitialClientRender = function() {
//   // eslint-disable-next-line no-undef
//   var ssStyles = window.document.getElementById("server-side-jss");
//   ssStyles && ssStyles.parentNode.removeChild(ssStyles);
// };

exports.replaceRouterComponent = ({ history }) => {
  // const reduxStore = createStore();
  const reduxStore = configureStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={reduxStore}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.object.isRequired
  };

  return ConnectedRouterWrapper;
};
