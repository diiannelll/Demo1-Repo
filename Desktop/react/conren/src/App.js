import React from 'react'

function Lesson({name, isWatched}){
    return <li className='item'>{isWatched ? <del>{name}</del>: name}</li>     
    } 

const App = () => {
    return (
        <div>
            <section>
                <h1>Какие уроки мы прошли с Meta Coding</h1>
                <ul>
                    <Lesson isWatched={true} name="Выбрать хостинг для своего сайта"/>
                    <Lesson isWatched={true} name="Записаться на курсы английского"/>
                    <Lesson isWatched={false} name="Сделать презентацию"/>
                    <Lesson isWatched={true} name="Сходить в парикмахерскую"/>
                    <Lesson isWatched={false} name="Навести порядок на кухне"/>
                    <Lesson isWatched={true} name="Написать подруге"/>
                    <Lesson isWatched={true} name="Подарить маме цветы"/>
                </ul>
            </section>
        </div>
    )
}

export default App