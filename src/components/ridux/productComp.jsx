import React from 'react'
import {useSelector} from 'react-redux'

function ProductComp() {
    const products = useSelector((state)=> state.allProducts.products)

    return (
        <div>
            {products.map(product => (
                <div>
                <h3>{product.name}</h3>
                <p style={{marginBottom: '20px'}}>{product.email}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductComp
