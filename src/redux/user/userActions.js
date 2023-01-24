import { GET_ALL_FLIGHTS, USER_FLIGHT_BOOKING } from "./userTypes"
import { GET_ALL_AIRPORTS, GET_FLIGHT_DETAILS, GET_FLIGHT_BY_ID, ADD_BOOKING } from "./userTypes"

export const getAllAirport = (airports) => {
    return {
        type: GET_ALL_AIRPORTS,
        payload: airports
    }
}

export const getAllFlights = (flights) => {
    return {
        type: GET_ALL_FLIGHTS,
        payload: flights
    }
}

export const getFlightDetail = (flight) => {
    return {
        type: GET_FLIGHT_DETAILS,
        payload: flight
    }
}

export const getFlightById = (flight) => {
    return {
        type: GET_FLIGHT_BY_ID,
        payload: flight
    }
}

export const addBooking = (booking) => {
    return {
        type: ADD_BOOKING,
        payload: booking
    }
}

export const userFlightBooking = (booking) => { return { type: USER_FLIGHT_BOOKING, payload: booking } }