import {INCREMENT_ITERATOR, SET_QUESTIONS} from "./types";

export const setQuestions = (data) => ({
      type: SET_QUESTIONS,
      payload: data
});

export const setIncrement = (data) => {
    console.log(data);
    return {
        type: INCREMENT_ITERATOR,
        payload: data
    }
};
