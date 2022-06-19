import React from 'react';
import ReactDOM from 'react-dom';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

import './styles.css';
import Dice from './Dice';

function Main() {
    const [newDice, setNewDice] = React.useState(newDiceSet());
    const [Tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const AllHeld = newDice.every(element => element.isHeld);
        const firstVal = newDice[0].value;
        const AllSame = newDice.every(element => element.value === firstVal);

        if(AllHeld && AllSame){
            setTenzies(true);
            // console.log("Yay! you WON!");
        }
    }, [newDice])
    
    function generateNewDice() {
        return (
            {
                value: Math.floor(Math.random() * 6) + 1, 
                isHeld: false,
                id: nanoid(),
            }
        )
    }
    function newDiceSet() {
        let newDiceArr = [];
        for(let i=0; i<10; i++){
            newDiceArr.push(generateNewDice());
        }
        return newDiceArr;
    }

    const DiceElements = newDice.map((element) => 
        <Dice 
            key={element.id} 
            value={element.value} 
            isHeld={element.isHeld}
            holdDice={() => holdDice(element.id)}
        />
    );

    function holdDice(id) {
        setNewDice(prevDice => prevDice.map(
            element => {
                return (
                    (element.id === id) ?
                    {...element, isHeld: !element.isHeld} :
                    element
                ) 
            }
        ))
    }
    function RollDice() {
        if(!Tenzies){
            setNewDice(prevDice => prevDice.map(
                element => {
                    return (
                        element.isHeld ? 
                        element :
                        generateNewDice()
                    )
                }
            ));
        } else {
            setTenzies(false);
            setNewDice(newDiceSet())
        }
    }
    
    return (
        <main className="Main">
            {Tenzies && <Confetti/>}
            <div className='Info-div'>
                <h1 className="Info-title">Tenzies</h1>
                <p className="Info-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            <div className='Dice-components'>
                {DiceElements}
            </div>

            <div className='Button-div'>
                <button className='Button-roll-dice' onClick={RollDice}>
                    {Tenzies ? "Reset Game" : "Roll Dice"}
                </button>
            </div>
        </main>
    );
}

export default Main;