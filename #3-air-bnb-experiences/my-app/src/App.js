import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Navbar from './components/Header/Navbar/Navbar'
import Hero from './components/Header/Hero/Hero'
import Card from './components/Body/Card/Card'
import Footer from './components/Footer/Footer'
import Dev from './components/Footer/Dev'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Card/>
        <Footer/>
        <Dev/>
    </div>
  );
}

export default App;