import axios from "axios";
import {flightManagementURL} from './URL'

export const getAllFlights = () => {
    // console.log("calledService")
    return axios.get(`${flightManagementURL}/getAllFlights`)
}

export const getFlightByID = (id) => {
    return axios.get(`${flightManagementURL}/getFlight/${id}`)
}

export const getFlightByTime = (time) => {
    return axios.get(`${flightManagementURL}/${time}`)
}

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/morningFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/afternoonFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/nightFlights

