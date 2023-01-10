import axios from "axios";

const URL = "http://LIN59017635:8081"

export const getAllFlights = () => {
    // console.log("calledService")
    return axios.get(`${URL}/getAllFlights`)
}

export const getFlightByID = (id) => {
    return axios.get(`${URL}/getFlight/${id}`)
}

export const getFlightByTime = (time) => {
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
    return axios.post(`${URL}/addFlight`, {
        // sourceCode: obj.sourceCode,
        // destinationCode: obj.destinationCode,
        // timeOfDeparture: obj.timeOfDeparture,
        // timeOfArrival: obj.timeOfArrival
        sourceCode: "DEL",
        destinationCode: "PNQ",
        timeOfDeparture: "10:00:00",
        timeOfArrival: "12:00:00"
    })
}

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/morningFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/afternoonFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/nightFlights

