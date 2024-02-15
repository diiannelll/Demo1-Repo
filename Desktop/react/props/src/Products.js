import React from 'react'
import Product from './Product'

const Products = (props) => {
    const {products} = props;
    return (
        <div>
          <main>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
          </main>
        </div>
    )
}

export default Products