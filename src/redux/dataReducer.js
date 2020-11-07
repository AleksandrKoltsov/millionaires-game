import {GET_DATA, SET_QUESTIONS} from "./types";
import Data from '../data/gameConfig'

const initialState = {
    data: Data,
    questions: [],
    iterator: 0,
    startGame: false
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, data: action.payload};
            // return [...state.startGame, payload];
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
                startGame: true
            };
            // return [...state.questionArr, payload];
        default: return state
    }
};