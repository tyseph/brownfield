import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightData from '../admin/flightManagement/FlightData';
const SearchResult = ({ res }) => {

    const [flights, setFlights] = useState([]);
    const data = {
        "source": "BOM",
        "destination": "PNQ",
        "dateOfTravelling": "2022-12-01",
        "noOfPassenger": 9
    }

    //   let flights = []
    useEffect(() => {
        // axios.post("http://LIN59017635:8081/userSearch", data).then(res => {
        //     console.log(res.data)
        //     setFlights(res.data[0])
        // }).catch(err => {
        //     console.log(err)
        // })
    }, [])
    console.log(flights)
    return (
        <div>
            <div className="py-4 overflow-auto">
                <div
                    className="container mx-auto shadow-md rounded-lg overflow-auto"
                >
                    <table className="w-full">
                        <thead className='w-full'>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Flight ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Source
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Departure-Time
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Destination
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Arrival
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Distance/Time
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Fare
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Edit
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flights.flight.flightId}</td>
                                <td>{flights.flight.source.city}</td>
                                <td>{flights.flight.departureTime}</td>
                                <td>{flights.flight.destination.city}</td>
                                <td>{flights.flight.arrivalTime}</td>
                                <td>{flights.flight.distance}</td>
                                <td>{flights.fare}</td>
                                {/* <td>{flights.flight.distance}</td> */}
                                <button>Book</button>
                            </tr>
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;