import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.css';

function Footer(props){
    return(
      <footer className={props.darkMode ? "" : "light"}>
          <small>© kxnyshk dev. 2022 | All rights reserved</small>
      </footer>
    )
}

export default Footer