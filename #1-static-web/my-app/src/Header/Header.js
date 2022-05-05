import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import ReactIcon from './React-icon.svg.png';

function Header(){
    return(
        <header>
            <nav className="nav">
                <img src={ReactIcon} className="logo"/>
                <h1 id="logo-text">ReactFacts</h1>
                <h2 id="proj-1">React Course : Project 1</h2>
            </nav>
        </header>
    )
  }

export default Header