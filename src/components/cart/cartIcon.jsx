import React from 'react'
import {IoBagHandleOutline} from 'react-icons/io5'
import './cart.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { selectCartItemsCount } from '../redux/cartRedux/cartSelectors';

function CartIcon({toggleCartHidden}) {
    const cart_length = useSelector(state => selectCartItemsCount(state))
    return ( 
        <> 
            <Link className='cart-btn' to='/cart'>
                <IoBagHandleOutline className='cart-icon' onClick={toggleCartHidden}/>
                <span className='cart-number'>{cart_length}</span>
            </Link>
        </>
    )
}

export default CartIcon