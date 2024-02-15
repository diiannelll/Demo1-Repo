import Header from './Header'
import Products from './Products'
import Basket from './Basket'
import data from './data'
import { useState } from 'react'
import Footer from './Footer'

function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.gty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product,qty: 1}]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty ===1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist,qty: exist.qty - 1} : x
                )
            );
        }
    };

   return (
    <div className="App">
        <Header />
        <Products products={products} onAdd={onAdd}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        <Footer></Footer>
    </div>
   ); 
}

export default App;
