import React from 'react';
import './home.css'
import Logo from '../images/logo.png'
import { Link, useHistory} from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go'
import CartIcon from '../cart/cartIcon';
import { useSelector} from 'react-redux';
import { auth } from '../firebase/firebaseUtils'

const Navbar = (props) => {
    const mapState = (state) => ({
        currentUser: state.user.currentUser
    })
    const history = useHistory()
    const {currentUser} = useSelector(mapState)


    async function handleLogout() {
        try{
            await auth.signOut()
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
                            <Link to='/products/all'>Products</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li>
                            {currentUser ? null : <Link to='/signin'>Sign In</Link>}
                        </li>
                        <li>
                            {currentUser ? null : <Link to='/register'>Register</Link>}
                        </li>
                        <li>
                            {currentUser ? <Link to='/' className='logout_btn' onClick={handleLogout}>
                                Log out</Link> : null}
                        </li>
                        <li>
                            {currentUser ? <CartIcon /> : null}
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