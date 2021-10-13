import Atropos from 'atropos/react/atropos-react.esm';
import React from 'react';
import {categories} from '../data/jsondata'
import './directory.css'

const Cards = ({title}) => {
    return ( 
        <>
            <div className='category-title'>
                <h1>{title}</h1>
            </div>
            <div className='cards-menu'>
                {categories.map(category => 
                    <div className='cards'>
                        <Atropos>
                            <div className='overlayImg'>
                                <img className ='card-img' key={category.id}
                                src={category.imageUrl} alt={category.title}/>
                            </div>
                        </Atropos >
                        <div className='card-title'>
                            <h2>{category.title}</h2>
                        </div>
                    </div>
                )}
            </div>
        </>
     )
}
 
export default Cards;