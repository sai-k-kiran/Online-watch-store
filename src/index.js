import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'atropos/atropos.css'
import App from './App';
import store, {persistor} from './components/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

