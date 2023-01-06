import axios from 'axios';
import URL from './URL'

export const userSignup = (userDetails) => {
    return axios({
        'method':'POST',
        'url':`${URL}/signup`,
        'data': userDetails
    })
}

export const userLogin = (authRequest) => {
    return axios({
        'method':'POST',
        'url':`${URL}/login`,
        'data':authRequest
    })
}