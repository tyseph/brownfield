import axios from 'axios';


export const userSignup = (userDetails) => {
    return axios({
        'method':'POST',
        'url':`http://LIN51016635:8083/home/registerUser`,
        'data': userDetails
    })
}

export const userLogin = (authRequest) => {
    return axios({
        'method':'POST',
        'url':`http://LIN51016635:8083/home/login`,
        'data':authRequest
    }).then(res=>{
        console.log(res.data.token)
    }).catch(err=>{
        console.log(err)
    })
}


