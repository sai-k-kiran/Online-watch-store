import React from 'react';

const Input = ({value, name, type, handlechange, placeholder, reference}) => {
    return ( 
        <div className='form-group'>
            <input className='form-input' onChange={handlechange} ref={reference}
            value={value} name={name} type={type} placeholder={placeholder} required />
        </div>
     )
}
 
export default Input;