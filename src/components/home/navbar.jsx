import React, { useState } from 'react';
import './home.css'
import Logo from './python.jpg'
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {GoThreeBars} from 'react-icons/go'
import {IoBagHandleOutline} from 'react-icons/io5'

const Navbar = () => {
    const [query, setQuery] = useState('')

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
                            <Link to='/signin'>Sign In</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/cart'><IoBagHandleOutline /></Link>
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