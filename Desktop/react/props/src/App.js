import React from 'react'
import data from './data'
import Products from './Products'

const App = () => {
    const{products} = data;

    return (
        <div>
            <Products products={products}/>
        </div>
    )
}

export default App