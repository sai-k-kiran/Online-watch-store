import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'atropos/atropos.css'
import App from './App';
import stores from './components/ridux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

