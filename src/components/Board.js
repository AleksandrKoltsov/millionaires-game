import React from 'react';
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import {connect} from "react-redux";
import '../styles/Board.css';

const Board = ({answers}) => {

    const handleClickAnswer = (response) => {
        console.log(response)
    };


    return (
        <div className='board'>
            <div className='question'>
                <Question
                    props={'question'}
                />
            </div>
            <div className='answers'>
                <Answers
                    props={answers}
                    callback={()=>handleClickAnswer}
                />
            </div>
            <div className='menu'>
                <Menu
                    props={1000}
                />
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        answers: state.data.questions
    }
};

export default connect(mapStateToProps)(Board);