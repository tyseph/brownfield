import { GET_ALL_FLIGHTS } from "./adminTypes";
import { ADD_FLIGHT } from "./adminTypes";

const initialState = {
    flights: {}
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_FLIGHTS: return {
            ...state,
            flights: action.payload
        };

        case ADD_FLIGHT: return action.payload;

        default: return state;
    }
}
