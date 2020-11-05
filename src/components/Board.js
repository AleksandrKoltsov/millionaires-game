import React from 'react';
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import {connect} from 'react-redux';
import '../styles/Board.css';

const Board = ({data}) => {

    const arr = data.reduce((bank, item) => bank.includes(item.price) ? bank : [...bank, item.price], []);

    const filtered = (arr, value) => {
        const filteredArr = arr.filter(el => el.price === value);
        return filteredArr[Math.floor(Math.random() * filteredArr.length)];
    };

    const questionArr = [];

    arr.map(el => questionArr.push(filtered(data, el)));

    const isGame = () => {
        let winner = false;
        return winner;
    };
    for(let i = 0; i < questionArr.length; i++){
        if(true) {
            return (
                <div className='board'>
                    <div className='question'>
                        <Question
                            props={questionArr[i].question.title}
                        />
                    </div>
                    <div className='answers'>
                        <Answers
                            props={questionArr[i].question}
                            func={isGame()}
                        />
                    </div>
                    <div className='menu'>
                        <Menu
                            props={questionArr[i].price}
                        />
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        data: state.data.data.data
    };
};
export default connect(mapStateToProps, null)(Board);