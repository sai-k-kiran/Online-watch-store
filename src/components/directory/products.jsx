import React, {useState} from 'react';
import './products.css'
import Atropos from 'atropos/react/atropos-react.esm';
import 'atropos/atropos.css'
import {items} from '../data/jsondata'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import Filter from './filter';
import { Link } from 'react-router-dom';    

const Products = () => {
    const [menu, setMenu] = useState(items);
    const [filter, setFilter] = useState({price:'', category:'', color: ''})
    const [hovered, setHovered] = useState(false)

    console.log(hovered)
    const sortProducts = (e) => {
        const filter = e.target.value
        const newProducts = items.slice().sort((a,b) => (
            filter === "Low to high" ? 
            a.price > b.price ? 
            1 : -1 :
            filter === "High to low" ? 
            a.price < b.price ? 
            1: -1 :
            a.id < b.id ? 
            1: -1
        ))
        setMenu(newProducts)
        setFilter({price: e.target.value})
    }
    const productsMaterial = (e) => {
        if(e.target.value === ""){
            setMenu(items)
            setFilter({category: e.target.value})
        } else {
        const newProducts = items.filter(product => product.strap === e.target.value)
        setMenu(newProducts)
        setFilter({category: e.target.value})
        }
        return menu
    }
    const filterProducts = (e) => {
        if(e.target.value === ""){
            setMenu(items)
            setFilter({color: e.target.value})
        } else {
        const newProducts = items.filter(product => product.color === e.target.value)
        setMenu(newProducts)
        setFilter({color: e.target.value})
        }
    }
    return ( 
        <>
            <Navbar />
            <div className='products-filter'>
                <h1>Lorem ipsum dolor </h1>
            </div>
            <div className='filter'>
            <Filter count={menu.length} price={filter.price}
                    color={filter.price} category={filter.category} productsMaterial={productsMaterial}
                    filterProducts={filterProducts} sortProducts={sortProducts}/>
            </div> 
            <div className='products-block'>
                <div className='products-grid'>
                    {menu.map(watch => (
                        <Link to={`/product/${watch.id}`} >
                        <div className='products' key={watch.id}>
                            <img className ='product-img'
                            src={watch.imageUrl} alt={watch.title}/>
                            <div className='product-title'>
                                <h2>{watch.title}</h2>
                            </div>
                            <div className='addToCart'>
                                <button className='btn add'>Add to cart</button>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
     )
}
 
export default Products;