import React from 'react'

const Product = (props) => {
    const{product} = props
    return (
        <div>
           <h1>{product.name} / {product.year}</h1>
           <img src={product.image} alt={product.name} width={500} height={400}/>
           <h2>{product.price}</h2>
           <h4>Осталось:{product.quantity}шт</h4>
           
        </div>
    )
}

export default Product