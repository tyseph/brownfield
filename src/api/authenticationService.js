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
        'url':`http://LIN59017635:8089/home/userLogin`,
        'data':authRequest
    })
}