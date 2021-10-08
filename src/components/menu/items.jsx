import React from 'react';
import Item from './item';
import featured from '../data/jsondata'
import './items.css';

function Items({title}) {
 
    return (
      <>
      <div className='featured-title'>
        <h1>{title}</h1>
      </div>
      <div className='items-menu'>
        {featured.sections.map(({ id, ...rest }) => (
          <Item key={id} {...rest} />
        ))}
      </div>
      </>
    )
  }


export default Items;