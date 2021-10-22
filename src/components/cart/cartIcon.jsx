import React from 'react'
import {IoBagHandleOutline} from 'react-icons/io5'
import './cart.css'
import { connect, useSelector } from 'react-redux'
import {toggleCartHidden} from '../redux/cartRedux/cartActions'

function CartIcon({toggleCartHidden}) {
    const cart_length = useSelector(state => state.cart_length.length)
    return (
        <> 
            <IoBagHandleOutline className='cart-icon' onClick={toggleCartHidden}/>
            <span className='cart-number'>{cart_length}</span>
        </>
    )
}
const mapsDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(null, mapsDispatchToProps)(CartIcon)