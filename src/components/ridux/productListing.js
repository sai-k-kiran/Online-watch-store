import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import ProductComp from './productComp'
import axios from "axios"
import {useDispatch} from 'react-redux'
import {setProducts} from '../ridux/main'

function ProductListing() {
    const products = useSelector((state)=> state.allProducts.products)
    const dispatch = useDispatch()

    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        .catch(err => console.log("ERROR:", err))
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchUsers()
    }, [])
   
    return (
        <div>
          <ProductComp /> 
        </div>
    )
}

export default ProductListing
