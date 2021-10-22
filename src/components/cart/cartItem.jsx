import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'

const CartItem = () => {
    const list = useSelector(state => state.cartItems.items)
    return (
    <div>
        {list.map((item, index) => (
            <div className='cart-item' key={index}>
                <img src={item.image} alt={item.name} />
                <div className='item-details'>
                    <h3 className='name'>{item.name}</h3>
                    <p className='price'>${item.price}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default CartItem