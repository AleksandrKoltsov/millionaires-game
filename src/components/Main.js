import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MainPage.css';

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to='/Board'>
                <button className='startBtn'>
                    <p className='textBtn'>START</p>
                </button>
            </Link>
        </div>
    )
};
export default MainPage;