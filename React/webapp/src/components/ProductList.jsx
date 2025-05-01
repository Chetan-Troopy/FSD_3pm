import React from 'react'
import ProductCard from './ProductCard'
import { ProductData } from '../data/ProductData'

function ProductList() {
  return (
    <>

    <div className='row row-cols-1 row-cols-md-3 g-4'>
        {ProductData.map(product => (
            <ProductCard product = {product}/>
        ))}

    </div>
    
    </>
  )
}

export default ProductList