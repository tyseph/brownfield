import { redirect } from "react-router-dom";
import { userLogin } from "../../api/authenticationService";
import { userSignup } from "../../api/authenticationService";


export const signup = (userDetails) => { 
    console.log(userDetails)
    userSignup(userDetails).then((response) => {
        
        if (response.status === 200) {
            console.log(userDetails)
            console.log('successfully signed in')
        }
    }) 
}

export const login = (authDetails) => {

    userLogin(authDetails).then((response) => {
        if (response.status === 200) {
            localStorage.setItem('USER_KEY', response.data.token)
            redirect("/")
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