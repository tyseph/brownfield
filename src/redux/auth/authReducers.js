import { LOGIN } from "./authTypes";
import { SIGNUP } from "./authTypes";
import { LOGOUT } from "./authTypes";

const initialState = {
    username: '',
    role:''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOGIN: return {
            ...state,
            username: action.payload,
            role: action.payload
        };

        case SIGNUP: return action.payload;

        case LOGOUT: return action.payload;

        default: return state;
    }
}

export default authReducer;