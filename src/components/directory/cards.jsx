import Atropos from 'atropos/react/atropos-react.esm';
import React, {useState} from 'react';
import {categories} from '../data/jsondata'
import './directory.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ItemCategories } from '../redux/cartRedux/cartActions';

const Cards = ({title}) => {
    const [category, setCategory] = useState()
    const dispatch = useDispatch()
    const handleCategory = (category) =>{
        setCategory(category.title)
    }
    dispatch(ItemCategories(category))
    
    return ( 
        <>
            <div className='category-title'>
                <h1>{title}</h1>
            </div> 
            <div className='cards-menu'>
                {categories.map(category => (
                    <Link to={`/products/${category.title}`} key={category.id}>
                    <div className='cards'>
                        <div className='overlayImg' onClick={()=>handleCategory(category)}>
                            <img className ='card-img'
                            src={category.imageUrl} alt={category.title}/>
                        </div>
                        <div className='card-title'>
                            <h2>{category.title}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </>
     )
}
 
export default Cards