import { DataObjectOutlined } from "@mui/icons-material";
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
<<<<<<< HEAD
    return axios.get(`${flightManagementURL}/${time}`)
=======
    return axios.get(`${URL}/${time}`)
}

export const getAllAiriports = (time) => {
    return axios.get(`${URL}/getAllAirports`)
}

export const getFlightBySearch = (obj) => {
    console.log(obj.source, obj.destination)
    return axios.post(`${URL}/search`, obj)
}

export const getByAdminSearch = (obj) => {
    return axios.post(`${URL}/adminSearch`, {
        flightId: obj.flightId,
        source: obj.src,
        destination: obj.des,
        time: obj.time
    })
}

export const postFlightData = (obj) => {
    console.log(obj)
    return axios.post(`http://LIN59017635:8081/addFlight`, obj)
>>>>>>> 0f3d0144834741b3a1c231b75f402d367d1ab454
}

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/morningFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/afternoonFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/nightFlights

