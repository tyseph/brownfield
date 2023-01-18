// flight actions
import { GET_ALL_AIRPORTS, GET_ALL_FLIGHTS, GET_ALL_USERS } from "./adminTypes"
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

export const GetAllAirports = (airports) => {
    return {
        type: GET_ALL_AIRPORTS,
        payload: airports
    }
}

export const GetAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users
    }
}