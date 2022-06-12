import React from 'react';
import ReactDOM from 'react-dom';

import './Navbar.css';
import TrollFace from './Troll Face.png'

function Navbar() {
    return(
        <nav>
            <div className='Navbar'>
                <span className='Navbar-img'><img src={TrollFace} id='Image-troll-face'></img></span>
                <span className='Navbar-text'>Meme Generator</span>
            </div>
        </nav>
    )
}

export default Navbar