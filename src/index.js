import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppInitialize } from './AppInitialize';
import {
  persistor,
  store,
} from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppInitialize />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);