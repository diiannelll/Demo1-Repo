import React from 'react'

const Basket = (props) => {
    const {cartItems, onAdd, onRemove} = props
const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0)
const taxPrice = itemsPrice * 0.14
const shippingPrice = itemsPrice > 2000 ? 0 : 20;
const totalPrice = itemsPrice + taxPrice + shippingPrice;    
   
    return (
        <div className='block'>
            <h2>Корзина</h2>
            <div>
             {cartItems.length ===0 && <div>Корзина пуста</div>}

            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                    <button  onClick={() => onAdd(item)} className='add'>
                        +
                    </button>
                </div>

                <div className='col-2 text-right'>
                    {item.qty} * ${item.price.toFixed(2)}
                </div>
                </div>
            ))}

            {cartItems.length !==0 && (
                <>
                  <hr/>
                <div className='row'>
                  <div className='col-2'>
                      Цена товаров
                  </div>
                  <div className='col-1 text-right'>
                       ${itemsPrice.toFixed(2)}
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2'>
                      Налоги
                  </div>
                  <div className='col-1 text-right'>
                       ${taxPrice.toFixed(2)}
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2'>
                      Доставка
                  </div>
                  <div className='col-1 text-right'>
                       ${shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className='row'>
                  <strong className='col-2'>
                      Общая цена
                  </strong>
                  <strong className='col-1 text-right'>
                       ${totalPrice.toFixed(2)}
                  </strong>
                </div>

                <button onClick={() => alert("Поздравляем с покупкой!")}>Купить</button>
                  </>
             )}
            </div>
        </div>
    )
}

export default Basket