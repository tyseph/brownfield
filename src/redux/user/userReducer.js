import { GET_ALL_AIRPORTS, GET_ALL_FLIGHTS, GET_FLIGHT_DETAILS, GET_FLIGHT_BY_ID, ADD_BOOKING, USER_FLIGHT_BOOKING} from "./userTypes";


const initialState = {
    airports: [],
    flights: [],
    booking:[]
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_AIRPORTS:
            return {
                ...state,
                airports: action.payload
            }

        case GET_ALL_FLIGHTS:
            return {
                ...state,
                flights: action.payload
            }

        case GET_FLIGHT_DETAILS:
            return {
                ...state,
                flight: action.payload
            }


        case GET_FLIGHT_BY_ID:
            return {
                ...state,
                flight: action.payload
            }

        case ADD_BOOKING:
            return{
                ...state,
                booking: action.payload
            }    

        case USER_FLIGHT_BOOKING:
            return{
                ...state,
                booking: action.payload
            }    
        default: {
            return state
        }
    }
} 