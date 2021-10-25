import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'


export default function Payment({list}) {

    return ( 
        <>
            <div className='payment-block'>
                    <h2 style={{marginBottom: '10px'}}>No. of Items: {list.length}</h2>
                    <div className='table-block'>
                        <table>
                            {list.map((item, index) => (
                                <tr key={index} style={{padding: '5px'}}>
                                    <td>
                                        <h3>{item.name} </h3>
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
                                    $ {list.reduce((a,v) =>  a = a + v.price, 0)}</h2>
                                </td>
                            </tr> 
                        </table>
                    </div>
                    <Link to='/shipping' className='pay-btn'>Proceed to pay</Link>
                </div>
        </>
    )
}
