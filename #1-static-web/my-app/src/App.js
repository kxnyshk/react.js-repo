import React from 'react';
import ReactDOM from 'react-dom';

import './App.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? "App-dark" : "App-light"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;