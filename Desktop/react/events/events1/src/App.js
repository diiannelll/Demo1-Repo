import React from 'react'

function Button ({message, children}) {
    return (
       <button onClick={() => alert(message)}> {children} </button>
    )
}

const App = () => {
    return(
        <div>
            <Button message="Гоооол!">Бей по мячу</Button>
        </div>
    )
}



export default App