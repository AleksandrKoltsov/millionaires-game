import React from 'react';
import '../styles/MainPage.css';
import { Link } from "react-router-dom";

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