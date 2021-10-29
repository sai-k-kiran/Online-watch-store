import React, {useState} from 'react';
import './products.css'
import {items} from '../data/jsondata'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import Filter from './filter';
import { Link, useParams } from 'react-router-dom';  

const Products = () => {
    const {category} = useParams()
    const filteredItems = items.filter(item => item.category === category)
    const [menu, setMenu] = useState(category === 'all' ? items : filteredItems);
    const [filter, setFilter] = useState({price:'', category:'', color: ''})

    const sortProducts = (e) => {
        const filter = e.target.value
        const newProducts = filteredItems.slice().sort((a,b) => (
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
        const newProducts = filteredItems.filter(product => product.strap === e.target.value)
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
        const newProducts = filteredItems.filter(product => product.color === e.target.value)
        setMenu(newProducts)
        setFilter({color: e.target.value})
        }
    }
    return ( 
        <>
            <Navbar />
            <div className='products-filter'>
                <h1>Discover our Timeless Collection</h1>
            </div>
            <div className='filter'>
            <Filter count={menu.length} price={filter.price}
                    color={filter.price} category={filter.category} productsMaterial={productsMaterial}
                    filterProducts={filterProducts} sortProducts={sortProducts}/>
            </div> 
            <div className='products-block'>
                <div className='products-grid'>
                    {menu.map(watch => (
                        <Link to={`/product/${watch.id}`} key={watch.id}>
                        <div className='products'>
                            <img className ='product-img'
                            src={watch.imageUrl} alt={watch.title}/>
                            <div className='product-title'>
                                <h2>{watch.title}</h2>
                            </div>
                            <div className='addToCart'>
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