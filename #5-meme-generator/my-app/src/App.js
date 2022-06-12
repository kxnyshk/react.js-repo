import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Navbar from './components/Header/Navbar'
import Meme from './components/Body/Meme'
import Dev from './components/Footer/Dev'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Meme/>
        <Dev/>
    </div>
  );
}

export default App;