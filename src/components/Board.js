import React from 'react';
import {connect} from "react-redux";
import {gameOver, setIncrement, result} from "../redux/actions";
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import GameOver from "./GameOver";
import '../styles/Board.css';

const Board = ({
   answers,
   i,
   setIncrement,
   end,
   gameOver,
   result,
   price
}) => {
    //if array is't empty else return Error page
    if (answers.length > 0) {
        const answ = {
            question: answers[i].question.title,
            true: answers[i].question.true,
            false: answers[i].question.false,
            price: answers[i].price,
            len: answers.length
        };
        //getting answer in callback
        const handleClickAnswer = (response) => {
            if(response === answ.true) {
                setIncrement(++i);
                result(answ.price);

                if(i === answ.len) {
                    result(answ.price);
                    setIncrement(i = 0);
                    gameOver(true);
                }
            } else {
                result(price);
                gameOver(true);
            }
        };
        //create array with answers for question and transfer on props component
        const arrAnswers = [answ.true, ...answ.false];
        if(end) {
            return (
                <GameOver price={price}/>
            )
        } else {
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
                            data={price}
                        />
                    </div>
                </div>
            )
        }
    }
    return <div>Error</div>
};
const mapStateToProps = state => {
    return {
        answers: state.data.questions,
        i: state.data.iterator,
        end: state.data.gameOver,
        price: state.data.result
    }
};
const mapDispatchToProps = {
    setIncrement,
    gameOver,
    result
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);