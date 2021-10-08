import React from 'react';
import { withRouter } from 'react-router-dom';
import Atropos from 'atropos/react/atropos-react.esm';
import './items.css';

const Item = ({ title,imageUrl}) => (
    <div>
      <Atropos className="featured-item" shadowOffset={20}>
          <img className ='item-img' 
          src={imageUrl} alt={title}/> 
      </Atropos>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>
  </div>
)

export default Item;