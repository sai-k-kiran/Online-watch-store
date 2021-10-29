import React from 'react'
import './cart.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../redux/cartRedux/cartSelectors'
import { createStructuredSelector} from 'reselect'
import { selectCartItemsCount } from '../redux/cartRedux/cartSelectors';
import CartItem from './cartItem'
import {Link} from 'react-router-dom'

const Cart = () => { 
    const mapState = createStructuredSelector({
        cartItems: selectCartItems,
        totalAmount: selectCartTotal
    })
    const {cartItems, totalAmount} = useSelector(mapState)
    const cart_length = useSelector(state => selectCartItemsCount(state))

    return (
        <div>
           <Navbar />
           <div className='cart-block'>
               {cart_length > 0 ? 
                <div className='items-block'>
                    <h2>Total: {cart_length} Items</h2>
                    {cartItems.map((item, index) => (
                        <div className='cart-items' key={index}>
                            <CartItem item={item} />
                        </div>
                    ))}
                    <h2>Total amount: £ {totalAmount}</h2>
                    <div className='links-block'>
                        <Link to='/shipping' className='pay-btn'>Proceed to pay</Link>
                        <Link to='/' className='pay-btn'>Continue shopping</Link>
                    </div>
                </div> :
               <h1>No items in your cart</h1>}
           </div>
           <Footer /> 
        </div>
    )
}


export default Cart
