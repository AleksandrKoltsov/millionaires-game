import React from 'react';
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import '../styles/Board.css';

const Board = () => {
    console.log();
    return (
        <div className='board'>
            <div className='question'>
                <Question props={'test'}/>
            </div>
            <div className='answers'>
                <Answers props={[1,2,3]}/>
            </div>
            <div className='menu'>
                <Menu />
            </div>
        </div>
    )
};
export default Board;