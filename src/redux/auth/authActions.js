import { userLogin } from "../../api/AuthenticationService";
import { userSignup } from "../../api/AuthenticationService";

export const signup = (userDetails) => { 
    userSignup(userDetails).then((response) => {
        if (response.status === 200) {
            console.log('successfully signed in')
        }
    }) 
}

export const login = (authDetails) => {
    userLogin(authDetails).then((response) => {
        if (response.status === 200) {
            localStorage.setItem('USER_KEY', response.data.token)
            console.log('successfully logged in')
        }
        else {
            console.log('something wrong, please try again')
        }
    })
    .catch(() => {
        
    })
}

export const logout = () => {
    localStorage.clear();  
}