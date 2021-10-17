import React, {useState} from 'react'
import './products.css'
import {items} from '../data/jsondata'
import { useParams } from 'react-router'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import {auth, db} from '../firebase/firebaseUtils'

function Product() {
    const { id } = useParams()
    const product = items[id - 1]

    const addToCart = (item) => {
        auth.onAuthStateChanged(user => {
             db.collection(user.email).add({
                id: item.id,
                name: item.title,
                image: item.imageUrl,
                price: item.price
            }).then(()=>{
                alert('Item added to cart')
            }) 
        })
      }

    return (
        <>
         <Navbar /> 
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
                <h1>{product.price} £</h1>
                <button className='btn' onClick={()=> addToCart(product)}>Add to cart</button>
             </div>
         </div>
         <Footer />
        </>
    )
}

export default Product