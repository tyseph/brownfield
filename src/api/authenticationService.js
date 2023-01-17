import axios from 'axios';
import { authURL } from './URL'

export const userSignup = (userDetails) => {
    return axios({
        'method': 'POST',
        'url': `${authURL}/registerUser`,
        'data': userDetails,
    })
}

export const userLogin = (authRequest) => {
    return axios({
        'method': 'POST',
        'url': `${authURL}/login`,
        'data': authRequest
    })
}

