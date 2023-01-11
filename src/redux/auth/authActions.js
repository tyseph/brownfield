import { userSignup } from "../../api/authenticationService";
import { LOGIN } from "./authTypes";


export const signup = (userDetails) => { 
    console.log(userDetails)
    userSignup(userDetails).then((response) => {
        
        if (response.status === 200) {
            console.log(userDetails)
            console.log('successfully signed in')
        }
    }) 
}

export const login = (values) => {

    return {
        type: LOGIN,
        payload: values
    }
}

export const logout = () => {
    localStorage.clear();  
}