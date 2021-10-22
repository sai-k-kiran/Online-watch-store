import React, {useState} from 'react'
import './cart.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebaseUtils'

const Cart = () => {
    const items = useSelector(state => state.cartItems.items)
    const [list, setList] = useState(items)

    const removeItem = (item) => {
        const newItems = list.filter(items => list.id !== items.id)
        setList(...list, newItems)
        auth.onAuthStateChanged(user=>{
            db.collection(user.email).doc(item.doc_id).delete()
        })
    }

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
                            <button className='remove-btn'
                            onClick={()=>removeItem(item)}>Remove</button>
                        </div>
                    </div>
                ))}
                </div>
                <div className='payment-block'>
                    <h2 style={{marginBottom: '10px'}}>No. of Items: {list.length}</h2>
                    <h2 style={{marginBottom: '20px'}}>Order Summary :</h2>
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
                    <button className='btn'>Proceed to pay</button>
                </div>
           </div>
           <Footer /> 
        </div>
    )
}

export default Cart
