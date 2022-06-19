import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Dice(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }

    return (
        <div onClick={props.holdDice} className="Dice-face" style={styles}>
            <h1 className='Dice-num'>{props.value}</h1>
        </div>
    );
}

export default Dice;