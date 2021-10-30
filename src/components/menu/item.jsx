import React from 'react';
import './items.css';

const Item = ({ title,imageUrl}) => (
    <div className="item">
          <img className ='item-img' 
          src={imageUrl} alt={title}/> 
          <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
) 

export default Item;