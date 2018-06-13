import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appReservations'),
);
