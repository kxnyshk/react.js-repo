import React from 'react';
import ReactDOM from 'react-dom';

import './Main.css';

function Main(props){
    return(
      <main className={props.darkMode ? "" : "light"}>
        <h1>Fun facts about React.js</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    )
}

export default Main