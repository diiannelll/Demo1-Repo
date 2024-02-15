import React from 'react'
import Product from './Product'

const Products = (props) => {
    const {products, onAdd} = props;
    return(
         <main className='block'>
            <div className='row'>
               {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}/>
               ))}
            </div>
         </main>
         
         
        )
}   

export default Products