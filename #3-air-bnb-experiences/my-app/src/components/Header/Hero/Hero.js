import React from 'react';
import ReactDOM from 'react-dom';

import './Hero.css';
import HeroGridImage from './Group 77.png'

function Hero() {
    return (
        <div className='Hero-div'>
            <div className='Hero-title'>
                Experiences near you
            </div>

            <div className='Hero-grid-div'>
                <img src={HeroGridImage} id='Hero-grid-img'></img>
            </div>

            <div className='Hero-header-div'>
                <h1 id='Hero-header'>
                    Online experiences
                </h1>
            </div>

            <div className='Hero-para-div'>
                <p id='Hero-para'>
                Join unique interactive activities 
                led by one-of-a-kind hosts—all without 
                leaving home.
                </p>
            </div>
        </div>
    )   
}

export default Hero