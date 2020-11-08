import React from 'react';
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import {connect} from "react-redux";
import {setIncrement} from "../redux/actions";
import GameOver from "./GameOver";
import '../styles/Board.css';
import {Redirect} from "react-router-dom";

const Board = ({answers, i, setIncrement}) => {
    if (answers.length > 0) {
        const answ = {
            question: answers[i].question.title,
            true: answers[i].question.true,
            false: answers[i].question.false,
            price: answers[i].price
        };
        const handleClickAnswer = (response) => {
            console.log(response);
            if(response === answ.true) {
                if(i <= answers.length){
                    i++;
                    setIncrement(i);
                }else {
                    return  <Redirect to="/GameOver" />

                }
            }else {
                i = 0;
                setIncrement(i);
                return <Redirect to="/GameOver" />
            }
        };
        const arrAnswers = [answ.true, ...answ.false];
        return (
            <div className='board'>
                <div className='question'>
                    <Question
                        data={answ.question}
                    />
                </div>
                <div className='answers'>
                    <Answers
                        data={arrAnswers}
                        callback={handleClickAnswer}
                    />
                </div>
                <div className='menu'>
                    <Menu
                        data={answ.price}
                    />
                </div>
            </div>
        )
    }
    return <div>Error</div>
};
const mapStateToProps = state => {
    return {
        answers: state.data.questions,
        i: state.data.iterator
    }
};
const mapDispatchToProps = {
    setIncrement
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);