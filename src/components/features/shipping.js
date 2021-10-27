import React, {useState} from 'react'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import Input from '../auth/input'
import './shipping.css'
import Payment from '../cart/payment'
import { useSelector } from 'react-redux'

export default function ShippingForm() {
    const [data, setData] = useState({name: '', mobile: '', address1: '', address2:''})
    const list = useSelector(state => state.cartItems.items)

    const handleformchange =(e) =>{
        const { value, name } = e.target;
        setData({ [name]: value }); 
    }
    const handlePay = (e) => {
        e.preventDefault()
    }
    return (
        <div>
           <Navbar />
           <div className='shipping-block'>
               <div className='shipping'>
                  <h1 style={{marginBottom: '20px'}}>Add a shipping address</h1>
                  <form className='shipping-form'>
                    <label>Name</label>
                    <input className='ship-input' name='name' value={data.name} onChange={handleformchange} />
                    <label>Phone Number</label>
                    <input className='ship-input' name='name' value={data.mobile} onChange={handleformchange} />
                    <label>Address Line 1</label>
                    <input className='ship-input' name='name' value={data.address1} onChange={handleformchange} />
                    <label>Address Line 2(optional)</label>
                    <input className='ship-input' name='name' value={data.address2} onChange={handleformchange} />
                    <button className='btn' onClick={handlePay}>Submit</button>
                  </form>
               </div>
               <div className='order-sum'>
                   <div className='order-box'>
                    <h2>Order Summary </h2>
                    <h2>Total : $ {list.reduce((a,v) =>  a = a + v.price, 0)}</h2>
                    <button className='master btn'>Pay with Master Card</button>
                    <button className='visa btn'>Pay with Visa</button>
                    <button className='paypal btn'>Pay with Paypal</button>
                    </div>
               </div>
           </div>
           <Footer /> 
        </div>
    )
}
