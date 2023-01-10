import axios from 'axios';

const URL = "http://LIN59017635:8081"


export const userSignup = (userDetails) => {
    return axios({
        'method': 'POST',
        'url': `${URL}/home/registerUser`,
        'data': userDetails
    })
}

export const userLogin = (authRequest) => {
    return axios({
        'method': 'POST',
        'url': `${URL}/login`,
        'data': authRequest
    })
}