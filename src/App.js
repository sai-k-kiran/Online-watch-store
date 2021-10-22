import React, {useState} from 'react';
import Home from './components/home/home'
import Products from './components/directory/products'
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Contact from './components/features/contact';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Product from './components/directory/product';
import Cart from './components/cart/cart'
import store from './components/redux/store';
import AuthProvider from './components/auth/authContext';

function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/product/:id' component={Product} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={Login} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  </Provider>
  );
}

export default App;

