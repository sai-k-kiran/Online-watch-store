import React from 'react'
import { motion } from 'framer-motion';
import CartItem from './cartItem'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

 function CartDropdown() { 
    
    const fadeTop ={
        hidden: {opacity: 0, y : -100},
        visible: {opacity: 1, y: 0},
      }

    return (
        <motion.div className='cart-dropdown' variants={fadeTop} initial='hidden' animate='visible'
        transition={{duration: 0.3}}>
            <div className='drop-items'>
                <CartItem />
            </div>
                <Link className='checkout-btn' to='/cart'>Checkout</Link>
        </motion.div>
    )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)