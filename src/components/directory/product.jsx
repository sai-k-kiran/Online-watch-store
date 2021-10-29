import React, {useState} from 'react'
import './products.css'
import {items} from '../data/jsondata'
import { useParams } from 'react-router'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import { toast, ToastContainer } from 'react-toastify';
import {useDispatch} from 'react-redux'
import {addProduct} from '../redux/cartRedux/cartActions'
import 'react-toastify/dist/ReactToastify.css'

function Product() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const product = items.filter(item => item.id == id)[0]

    const handleAddToCart = (product) => {
        if(!product) return ;
        dispatch(addProduct(product))
        toast.success('Item added to cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <>
         <Navbar /> 
         <ToastContainer />
         <div className='product'>
             <div className='productImg'>
                <img className='Img' src={product.imageUrl}
                alt={product.title} />
             </div>
             <div className='productDetail'>
                <h1>{product.title}</h1>
                <p>By {product.maker}</p>
                <h3>Color: {product.color}</h3>
                <h3>Strap material : {product.strap}</h3>
                <h3>Origin Country: {product.country}</h3>
                <h1>£ {product.price}</h1>
                <button className='btn' onClick={()=> handleAddToCart(product)}>Add to cart</button>
             </div>
         </div>
         <Footer />
        </>
    )
}

export default Product