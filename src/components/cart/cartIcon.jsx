import React from 'react'
import {IoBagHandleOutline} from 'react-icons/io5'
import './cart.css'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../redux/cartRedux/cartActions'

function CartIcon({toggleCartHidden}) {
    return (
        <>
            <IoBagHandleOutline className='cart-icon' onClick={toggleCartHidden}/>
            <span className='cart-number'>0</span>
        </>
    )
}
const mapsDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(null, mapsDispatchToProps)(CartIcon)