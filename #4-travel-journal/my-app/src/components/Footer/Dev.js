import React from 'react';
import ReactDOM from 'react-dom';

import './Dev.css';

function Dev() {
    return(
        <footer>
            <div className='Dev-div'>
                <div className='Dev-div-col Icons Twitter'>
                    <a href='https://twitter.com/kxnyshk' target={'_blank'}><i className="fa fa-brands fa-twitter Links Twitter-Icon"></i></a>
                </div>

                <div className='Dev-div-col Copyright'>
                    © kxnyshk dev. | 2022
                </div>
                <div className='Dev-div-col Icons GitHub'>
                    <a href='https://github.com/kxnyshk' target={'_blank'}><i className="fa fa-brands fa-github Links GitHub-Icon"></i></a> 
                </div>
            </div>
        </footer>
    )
}

export default Dev