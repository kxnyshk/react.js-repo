import React from "react";
import ReactDOM from 'react-dom/client';

import './Dev.css';

export default function Dev() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <div className="dev-div">
                    developed and designed by <br/> <span className="emoji">🦄 </span>
                    <a href="https://github.com/kxnyshk" target='_blank' className="social-link">
                        kxnyshk
                    </a> <span className="emoji">🦄</span>
                </div>
            </div>
        </footer>
    )
}