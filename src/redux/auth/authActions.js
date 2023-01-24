import { userSignup } from "../../api/authenticationService";
import { LOGIN } from "./authTypes";
import { SIGNUP } from "./authTypes"

export const signup = (userDetails) => async(dispatch) => { 
    try {
        dispatch(
            {
                type: LOGIN,
                payload: userDetails
            }
        ) 
    } catch {
        console.log('ff')
    }
}

export const login = (values) =>  async(dispatch) => {
    try {
        dispatch(
            {
                type: LOGIN,
                payload: values
            }
        ) 
    } catch {
        console.log('ff')
    }
}


export const logout = () => {
    localStorage.clear();  
}