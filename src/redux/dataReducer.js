import {GET_DATA} from "./types";
import Data from '../data/gameConfig'

const initialState = {
    data: Data
};

export const dataReducer = (state = initialState, {data, type}) => {
    switch (type) {
        case GET_DATA:
            return [...state, {data}];
        default: return state
    }
};