import { GET_ALL_FLIGHTS } from "./adminTypes";
import { ADD_FLIGHT } from "./adminTypes";

export const adminReducer = (state = [], action) => {
    switch(action.type) {
        case GET_ALL_FLIGHTS: return action.payload;

        case ADD_FLIGHT: return action.payload;

        default: return state;
    }
}

export default adminReducer;