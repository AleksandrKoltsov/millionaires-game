import React from 'react';
import {Redirect} from "react-router-dom";

const GameOver = (props) => {
    const onRedirect = () => {
        return <Redirect to="/"/>
    };
    return (
        <div>
            <h1>Game over</h1>
            <h2>{props.price}</h2>
            <button
                onClick={()=>onRedirect}
            >
                go Again
            </button>
        </div>
    )
};
export default GameOver;