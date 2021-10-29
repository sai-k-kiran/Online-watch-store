import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItemsCount } from '../redux/cartRedux/cartSelectors';

export default function Payment({cartItems}) {
    const cart_length = useSelector(state => selectCartItemsCount(state))

    return ( 
        <>
            <div className='payment-block'>
                    <h2 style={{marginBottom: '10px'}}>No. of Items: {cart_length}</h2>
                    <div className='table-block'>
                        <table>
                            {cartItems.map((item, index) => (
                                <tr key={index} style={{padding: '5px'}}>
                                    <td>
                                        <h3>{item.title} </h3>
                                    </td>
                                    <td>
                                        <h3> $ {item.price}</h3>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    <hr className='underline'></hr>
                                </td>
                                <td>
                                    <hr className='underline'></hr>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Order Total : </h2>
                                </td>
                                <td>
                                    <h2 style={{width: '100%'}}>
                                    $ {cartItems.reduce((a,v) =>  a = a + v.price, 0)}</h2>
                                </td>
                            </tr> 
                        </table>
                    </div>
                   
                </div>
        </>
    )
}
