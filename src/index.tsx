import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';
import { initialLogState } from './redux/reducers/logs';
import { AppState } from './interfaces/common';
import { initialAbilityState } from './redux/reducers/ability';
import configureStore from './redux/store';
import Routes from './Routes';

export const initialState: AppState = {
  logs: initialLogState,
  ability: initialAbilityState,
};

const store = configureStore(initialState);

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
