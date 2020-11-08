import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MainPage.css';
import {setQuestions} from "../redux/actions";
import {connect} from "react-redux";

const MainPage = ({data, setQuestions}) => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to='/Board'>
                <button
                    className='startBtn'
                    onClick={()=>setQuestions(data)}
                >
                    <p className='textBtn'>START</p>
                </button>
            </Link>
        </div>
    )
};

const mapStateToProps = state => {

    const data = state.data.data.data;
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
    setQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);