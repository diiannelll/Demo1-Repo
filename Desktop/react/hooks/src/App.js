import React from 'react'
import { useState} from 'react'

const App = () => {
    const [count,setCount] = useState(0);

    function handleClick() {
        setCount (count + 2);
    }
    return (
        <div>
            <p>Вы нажали на кнопку {count} раз</p>
            <button onClick={handleClick}>Нажми на меня</button>
        </div>
    )
}

export default App