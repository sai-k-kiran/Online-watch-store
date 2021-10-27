import React, {useState, useEffect} from 'react';
import Home from './components/home/home'
import Products from './components/directory/products'
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import Contact from './components/features/contact';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Product from './components/directory/product';
import Cart from './components/cart/cart'
import ShippingForm from './components/features/shipping';
import store from './components/redux/store';
import {auth, handleUserProfile} from './components/firebase/firebaseUtils'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => { // const authListener = auth....
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setUser({id: snapshot.id, ...snapshot.data()})
        })
      }
      setUser(user)
    })
     
  }, [user])
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products/:category' component={Products} />
            <Route path='/product/:id' component={Product} />
            <Route path='/contact' component={Contact} />
            <Route path='/register' render={()=> user ? <Redirect to='/' /> : <Register />}/>
            <Route path='/signin' render={()=> user ? <Redirect to='/' /> : <Login />}/>
            <Route path='/cart' component={Cart} />
            <Route path='/shipping' component={ShippingForm} />
          </Switch>
        </BrowserRouter>
  </Provider>
  );
}

export default App;

