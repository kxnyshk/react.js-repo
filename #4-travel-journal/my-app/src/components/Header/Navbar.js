import React from 'react';
import ReactDOM from 'react-dom';

import './Navbar.css';
import logo from './logo.png'

function Navbar() {
    return(
        <nav>
            <div className='Navbar'>
                <span className='Navbar-img'><img src={logo} id='Navbar-logo'></img></span>
                <span className='Navbar-text'>my travel journal.</span>
            </div>
        </nav>
    )
}

export default Navbar