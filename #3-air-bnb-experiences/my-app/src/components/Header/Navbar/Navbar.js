import React from 'react';
import ReactDOM from 'react-dom';

import './Navbar.css';
import AirbnbLogo from './Vector.png'
import WanderLustLogo from './wanderlustLogo.png'

function Navbar() {
    return(
        <nav>
            <div className='Logo-div'>
                <a href='#top'>
                    <img id='Wanderlust-logo' src={WanderLustLogo}></img>
                </a>
            </div>
        </nav>
    )
}

export default Navbar