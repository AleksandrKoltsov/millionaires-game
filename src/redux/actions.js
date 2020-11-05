import {GET_DATA} from "./types";

const  getData = (type, data) => ({
    type: GET_DATA,
    data: data
});

export default getData()