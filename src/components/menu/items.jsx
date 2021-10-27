import React from 'react';
import Item from './item';
import featured from '../data/jsondata'
import './items.css';
import {Link} from 'react-router-dom'

function Items({title}) {
 
    return (
      <>
      <div className='featured-title'>
        <h1>{title}</h1>
      </div>
      <div className='items-menu'>
        {featured.sections.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} >
              <Item title={item.title} imageUrl={item.imageUrl} />
          </Link>
        ))}
      </div>
      </>
    )
  }


export default Items;