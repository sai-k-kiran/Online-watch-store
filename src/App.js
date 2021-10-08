import React from 'react';
import Home from './components/home/home'
import Products from './components/directory/products'
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Contact from './components/users/contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
