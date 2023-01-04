import { LOGIN } from "./authTypes";
import { SIGNUP } from "./authTypes";
import { LOGOUT } from "./authTypes";

export const authReducer = (state = [], action) => {
    switch(action.type) {
        case LOGIN: return action.payload;

        case SIGNUP: return action.payload;

        case LOGOUT: return action.payload;

        default: return state;
    }
}

export default authReducer;