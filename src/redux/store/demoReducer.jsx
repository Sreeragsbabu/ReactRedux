

import { FETCH_DATA_SUCCESS, FETCH_USER_DATA_SUCCESS } from "../types";
const initialState = {
    dummyData: [],
    postData: {}
}
export default function demoReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                dummyData: payload
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                postData: payload
            };
        default:
            return state;
    }
}