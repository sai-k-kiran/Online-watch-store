import React from 'react';

const Input = ({value, name, type, handlechange, placeholder}) => {
    return ( 
        <div className='form-group'>
            <input className='form-input' onChange={handlechange}
            value={value} name={name} type={type} placeholder={placeholder} required />
        </div>
     )
}
 
export default Input;