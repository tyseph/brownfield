import axios from 'axios';


export const userSignup = (userDetails) => {
    return axios({
        'method':'POST',
        'url':`http://localhost:8080/signup`,
        'data': userDetails
    })
}

export const userLogin = (authRequest) => {
    return axios({
        'method':'POST',
        'url':`https://reqres.in/api/login`,
        'data':authRequest
    })
}