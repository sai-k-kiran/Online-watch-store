import React from 'react';
import Home from './components/home/home'
import Products from './components/directory/products'
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Contact from './components/users/contact';
import Register from './components/auth/register';
import Login from './components/auth/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={Login} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
