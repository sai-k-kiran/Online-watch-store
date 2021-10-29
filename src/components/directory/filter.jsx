import React from 'react';
import './products.css'

const Filter = ({count, color,price, category, filterProducts, sortProducts, productsMaterial}) => {
    return ( 
        <>
         <div className='filter-sort'>
         <label>Filter by Price </label>
                <select className='filter-menu'  value={price} onChange={sortProducts}>
                    <option value="Low to high">Low to high</option>
                    <option value="High to low">High to low</option>
                </select>
            </div>
            <div className='filter-sort' >
         <label>Filter by Category </label>
                <select className='filter-menu' value={category} onChange={productsMaterial}>
                    <option value="">All</option>
                    <option value="Steel">Steel Strap</option>
                    <option value="Leather">Leather Strap</option>
                    <option value="Elastic">Elastic Strap</option>
                </select>
         </div> 
         <div className='filter-sort'> 
         <label>Filter by Color </label>
                <select className='filter-menu' value={color} onChange={filterProducts}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Blue">Blue</option>
                    <option value="Silver">Silver</option>
                </select>
         </div>
        </>
     )
}
 
export default Filter;
