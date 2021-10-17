import React from 'react'
import './cart.css'

const CartItem = ({list}) => {
   console.log(list)
    return (
    <div>
        {list.map((item) => (
            <div className='cart-item'>
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