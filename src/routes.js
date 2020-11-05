import React from 'react'
import { Switch, Route } from 'react-router-dom'
import  Board from './components/Board'
import  GameOver from './components/GameOver'
import  MainPage from './components/Main'
import Error from "./components/Error";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>
            <Route path="/Board">
                <Board />
            </Route>
            <Route path="/GameOver">
                <GameOver />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
    )
};