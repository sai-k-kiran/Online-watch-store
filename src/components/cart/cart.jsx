import React, {useState, useEffect} from 'react'
import './cart.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import Payment from './payment'
import { useSelector } from 'react-redux'
import { auth, db } from '../firebase/firebaseUtils'

const Cart = () => { 
    const items = useSelector(state => state.cartItems.items)
    const [list, setList] = useState(items)

    const removeItem = (item) => {
        const newItems = list.filter(items => list.id !== items.id)
        setList(...newItems)
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
                <Payment list={list}/>
           </div>
           <Footer /> 
        </div>
    )
}


export default Cart
