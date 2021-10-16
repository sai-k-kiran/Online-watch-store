import React from 'react'
import { motion } from 'framer-motion';

 function CartDropdown() {
    const fadeTop ={
        hidden: {opacity: 0, y : -100},
        visible: {opacity: 1, y: 0},
      }
    return (
        <motion.div className='cart-dropdown' variants={fadeTop} initial='hidden' animate='visible'
        transition={{duration: 0.3}}>
            <div className='drop-items'>
                <button className=''>Checkout</button>
            </div>
        </motion.div>
    )
}

export default CartDropdown