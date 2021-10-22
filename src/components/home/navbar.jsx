import React, { useState, useEffect } from 'react';
import './home.css'
import Logo from '../images/python.jpg'
import { Link, useHistory } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {GoThreeBars} from 'react-icons/go'
import CartIcon from '../cart/cartIcon';
import { useAuth } from '../auth/authContext';
import { useDispatch } from 'react-redux';
import { cartItems, cartLength } from '../redux/cartRedux/cartActions';
import { auth, db } from '../firebase/firebaseUtils'

const Navbar = ({hidden}) => {
    const [query, setQuery] = useState('')
    const {currentuser, logout} = useAuth()
    const history = useHistory()
    const [list, setList] = useState([])
    const dispatch = useDispatch()
  
    useEffect(()=> {
      const getList = []
      auth.onAuthStateChanged(user=>{
          const items = db.collection(user.email).onSnapshot((snapshot)=>{
              snapshot.forEach(doc =>{
                  getList.push({...doc.data(), doc_id: doc.id})
              })
              setList(getList);
          })
          return () => items()
      })     
    }, []) 
    dispatch(cartLength(list.length))
    dispatch(cartItems(list))

    async function handleLogout() {
        try{
            await logout()
            history.push('/')
        } catch {
            alert("Failed to log out")
        }
    } 
    return ( 
        <div className='navigation'>
            <Link to='/'>
                <img className='logo' src={Logo} alt='logo' />
            </Link>          
            <div className='nav-links'>
                <div className='nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='search'>
                    <input className='search-bar'
                    onChange={e=>setQuery(e.target.value)} 
                    value={query} placeholder='Search items'/>
                    <Link to='/search'><FiSearch /></Link>
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li>
                            {currentuser ? null : <Link to='/signin'>Sign In</Link>}
                        </li>
                        <li>
                            {currentuser ? null : <Link to='/register'>Register</Link>}
                        </li>
                        <li>
                            {currentuser ? <Link to='/' className='logout_btn' onClick={handleLogout}>
                                Log out</Link> : null}
                        </li>
                        <li>
                            {currentuser ? <CartIcon /> : null}
                        </li>
                    </ul>
                </div>
                <div className='bars'>
                    <GoThreeBars />
                </div>
            </div>
        </div>
     )
}

export default Navbar;