import {GET_DATA, SET_QUESTIONS} from "./types";

export const  getData = (data) => ({
    type: GET_DATA,
    data: data
});

export const setQuestions = (data) => {

    return {
      type: SET_QUESTIONS,
      payload: data
}};
