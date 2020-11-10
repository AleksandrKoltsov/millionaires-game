import React from 'react';
import {Link} from "react-router-dom";

const GameOver = ({price}) => {
    return (
        <div>
            <h1>Game over</h1>
            <h2>{price}</h2>
            <Link to='/'>
                <button className='startBtn'>
                    <p className='textBtn'>Try again</p>
                </button>
            </Link>
        </div>
    )
};

export default GameOver;