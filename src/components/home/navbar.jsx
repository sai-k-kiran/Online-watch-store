import React, { useState } from 'react';
import './home.css'
import Logo from '../images/python.jpg'
import { Link, useHistory } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {GoThreeBars} from 'react-icons/go'
import CartIcon from '../cart/cartIcon';
import CartDropdown from '../cart/cartDropdown';
import { useAuth } from '../auth/authContext';
import { connect } from 'react-redux';

const Navbar = ({hidden}) => {
    const [query, setQuery] = useState('')
    const {currentuser, logout} = useAuth()
    const history = useHistory()

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
                            <Link to='/profile'>Profile</Link>
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
                            {currentuser ? <Link className='logout_btn' onClick={handleLogout}>
                                Log out</Link> : null}
                        </li>
                        <li>
                            {currentuser ? <CartIcon /> : null}
                        </li>
                    </ul>
                </div>
                {hidden ? null : <CartDropdown />}
                <div className='bars'>
                    <GoThreeBars />
                </div>
            </div>
        </div>
     )
}
const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})
 
export default connect(mapStateToProps)(Navbar);