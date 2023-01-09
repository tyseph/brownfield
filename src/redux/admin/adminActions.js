// flight actions
import { getAllFlights } from "../../api/FlightManagementService"
import { getFlightById } from "../../api/FlightManagementService"

export const GetAllFlights = () => {
    getAllFlights().then(response => {
        if(response.status === 200) {
            console.log('got all flights')
        }
    })
    console.log('inside getallflights action')
}

export const GetFlightById = (id) => {
    getFlightById(id).then(response => {
        if(response.status === 200) {
            console.log('got flight by id')
        }
    })
    
    console.log('inside getflightbyid action')
}