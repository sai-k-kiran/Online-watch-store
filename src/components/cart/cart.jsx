import React from 'react'
import './cart.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebaseUtils'

const Cart = () => {
    const list = useSelector(state => state.cartItems.items)

    const removeItem = (item) => {
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
                            <button onClick={()=>removeItem(item)}>Remove</button>
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
