import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Navbar from './components/Header/Navbar'
import Card from './components/Body/Card'
import Dev from './components/Footer/Dev'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Card/>
        <Dev/>
    </div>
  );
}

export default App;