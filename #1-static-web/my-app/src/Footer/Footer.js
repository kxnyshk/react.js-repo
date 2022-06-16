import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.css';

function Footer(props){
    return(
      <footer className={props.darkMode ? "" : "light"}>
        <div className='footer-text'>
          <small>© kxnyshk dev. 2022 | All rights reserved</small>
        </div>
      </footer>
    )
}

export default Footer