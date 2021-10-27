import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'atropos/atropos.css'
import App from './App';
import store from './components/redux/store'
import {Provider} from 'react-redux'
import AuthProvider from './components/auth/authContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

