import axios from "axios";
import URL from './URL'

export const getAllFlights = () => {
    // console.log("calledService")
    return axios.get(`${URL}/getAllFlights`)
}

export const getFlightByID = (id) => {
    return axios.get(`${URL}/getFlight/${id}`)
}