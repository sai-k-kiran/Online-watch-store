import React from 'react'
import './cart.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { useSelector } from 'react-redux'

const Cart = () => {
    const list = useSelector(state => state.cartItems.items)
    return (
        <div>
           <Navbar />
           <div className='cart-block'>
                <div className='items-block'>
                {list.map((item, index) => (
                    <div className='cart-items' key={index}>
                        <div className='item-pic'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='item-detail'>
                            <h3 className='name'>{item.name}</h3>
                            <p className='price'>${item.price}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className='payment-block'>

                </div>
           </div>
           <Footer /> 
        </div>
    )
}

export default Cart
