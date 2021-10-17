import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import CartItem from './cartItem'
import { connect } from 'react-redux';
import { auth, db } from '../firebase/firebaseUtils'
import { Link } from 'react-router-dom'

 function CartDropdown() {
    const fadeTop ={
        hidden: {opacity: 0, y : -100},
        visible: {opacity: 1, y: 0},
      }
      const [list, setList] = useState([])

      useEffect(()=> {
          const getList = []
          auth.onAuthStateChanged(user=>{
              const items = db.collection(user.email).onSnapshot((snapshot)=>{
                  snapshot.forEach(doc =>{
                      getList.push({...doc.data()})
                  })
                  setList(getList);
              })
              return () => items()
          })     
      }, []) 

    return (
        <motion.div className='cart-dropdown' variants={fadeTop} initial='hidden' animate='visible'
        transition={{duration: 0.3}}>
            <div className='drop-items'>
                <CartItem list={list}/>
            </div>
                <Link className='checkout-btn' to='/checkout'>Checkout</Link>
        </motion.div>
    )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)