import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {gameOver, getConfig, result, setIncrement, setQuestions} from "../redux/actions";
import Config from '../data/gameConfig';
import '../styles/MainPage.css';


const MainPage = ({
              data,
              setQuestions,
              result,
              gameOver,
              getConfig,
              setIncrement
}) => {
    return (
        <div>
            <span className='mainText'>Who wants to be a millionaire?</span>
            <Link to='/Board'>
                <button
                    className='startBtn'
                    onClick={()=>{
                        result(0);
                        setIncrement(0);
                        gameOver(false);
                        getConfig(Config);
                        setQuestions(data);
                    }}
                >
                    <p className='textBtn'>START</p>
                </button>
            </Link>
        </div>
    )
};

const mapStateToProps = state => {
    const data = state.data.data.data;
    //filtered array, and got new array consist from 12 questions and get him in props (data);
    const arr = data.reduce((bank, item) => bank.includes(item.price) ? bank : [...bank, item.price], []);
    const filtered = (arr, value) => {
        const filteredArr = arr.filter(el => el.price === value);
        return filteredArr[Math.floor(Math.random() * filteredArr.length)];
    };
    const questionArr = [];
    arr.map(el => questionArr.push(filtered(data, el)));

    return {
        data: questionArr
    };
};
const mapDispatchToProps = {
    setQuestions,
    result,
    gameOver,
    getConfig,
    setIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);