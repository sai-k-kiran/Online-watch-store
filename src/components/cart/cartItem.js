import React from 'react'
import './cart.css'
import { useDispatch } from 'react-redux'
import { removeItem, addProduct, removeCartItem } from '../redux/cartRedux/cartActions'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handleAddItem = (item)  => {
        dispatch(addProduct(item))
    }
    const handleRemoveItem = (id) => {
        dispatch(removeItem({id}))
        toast.success('Item removed from cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
    }
    const handleReduceItem = (item) => {
        dispatch(removeCartItem(item))
    } 
    return(
        <>
        <ToastContainer />
        <table className='cartItem'>
            <tbody>
                <tr>
                    <td>
                        <img src={item.imageUrl} alt={item.name} className='item-pic' />
                    </td>
                    <td>
                        <p>{item.title}</p>
                    </td>
                    <td>
                        <span onClick={()=> handleAddItem(item)}><IoIosArrowUp className='io-icon-up'/></span> 
                        <h3>{item.quantity}</h3> 
                        <span onClick={()=> handleReduceItem(item)}><IoIosArrowDown className='io-icon-down' /></span>
                    </td>
                    <td>
                        <p>£ {item.price}</p>
                    </td>
                    <td align='center'>
                        <button className='remove-btn' onClick={()=> handleRemoveItem(item.id)}>Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default CartItem