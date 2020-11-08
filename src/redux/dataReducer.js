import {INCREMENT_ITERATOR, SET_QUESTIONS} from "./types";
import Data from '../data/gameConfig'

const initialState = {
    data: Data,
    questions: [],
    iterator: 0
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return Object.assign({},state, {
                questions: action.payload,
            });
        case INCREMENT_ITERATOR:
            return {...state, iterator: action.payload};
        default: return state;
    }
};