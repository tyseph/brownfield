// flight actions
import { GET_ALL_FLIGHTS } from "./adminTypes"
import { GET_ALL_BOOKINGS } from "./adminTypes"

export const GetAllFlights = (flights) => {
    return {
        type: GET_ALL_FLIGHTS,
        payload: flights
    }
}

export const GetFlightById = (flights_by_id) => {
    return {
        type: GET_ALL_FLIGHTS,
        payload: flights_by_id
    }
}

export const GetAllBookings = (bookings) => {
    return {
        type: GET_ALL_BOOKINGS,
        payload: bookings
    }
}