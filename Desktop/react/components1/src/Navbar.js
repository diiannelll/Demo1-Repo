import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='navigation'>
               <a className='brand-name'>Meta Coding</a>
               <div className='navigation-menu'>
                <ul>
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
               </div>
            </nav>
        </div>
    )
}

export default Navbar