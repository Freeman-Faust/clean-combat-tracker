import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function DiceRoll(props)
{
    const [currRoll, updateRoll] = useState(null);

    function rollDie(min, max){
        return Math.floor(Math.random()*(max-min+1));
    }

    function handleRoll()
    {
       updateRoll(rollDie(1,20));

    }

    return(
        <div id='diceRoller'>
            <button id='rollButton' onClick={handleRoll}>Roll</button>
        <span>{currRoll}</span>
        </div>
    )
}

export default DiceRoll