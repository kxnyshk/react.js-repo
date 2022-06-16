import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import ReactIcon from './React-icon.svg.png';

function Header(props){
    return(
        <header>
            <nav className={props.darkMode ? "" : "light"}>
                <img src={ReactIcon} className="logo"/>
                <h1 id="logo-text">React Facts</h1>
                
                <div className='toggler'>
                    <p className='toggler-light'>Light</p>
                    
                    <div className='toggler-slider' onClick={props.toggleDarkMode}>
                        <div className='toggler-slider-circle'></div>
                    </div>
                    
                    <p className='toggler-dark'>Dark</p>
                </div>
                
                {/* <h2 id="proj-1">React Course : Project 1</h2> */}
            </nav>
        </header>
    )
  }

export default Header