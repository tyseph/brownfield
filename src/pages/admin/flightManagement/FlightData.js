const FlightData = ({ flights, update }) => {
    return (
        <tbody>
            {
                flights.map((flight) => {
                    return (
                        <tr key={flight.flightId}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{flight.flightId}</p>
                                {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{flight.source.code}</p>
                                <p className="text-gray-600 whitespace-no-wrap">{flight.source.name}</p>
                                <p className="text-gray-600 whitespace-no-wrap">{flight.source.city}</p>

                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{flight.departureTime}</p>
                                {/* <p className="text-gray-600 whitespace-no-wrap">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p> */}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{flight.destination.code}</p>
                                <p className="text-gray-600 whitespace-no-wrap">{flight.destination.name}</p>
                                <p className="text-gray-600 whitespace-no-wrap">{flight.destination.city}</p>

                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{flight.arrivalTime}</p>
                                {/* <p className="text-gray-600 whitespace-no-wrap">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p> */}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{Math.round(flight.distance)}</p>
                                <p className="text-gray-600 whitespace-no-wrap">KM</p>
                            </td>
                            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">₹8894</p>
                                <p className="text-gray-600 whitespace-no-wrap"></p>
                            </td> */}
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 cursor-pointer hover:scale-110 transition duration-150 font-semibold text-red-900 leading-tight"
                                >
                                    {/* <span
                                        aria-hidden
                                        className="inset-0 "
                                    ></span> */}
                                    <span onClick={() => update(flight.flightId, flight.source.code, flight.destination.code, flight.departureTime, flight.arrivalTime, true)} className="px-2 py-0.5 bg-red-200 rounded-xl transition duration-150 ease-out">Edit</span>
                                </span>
                            </td>
                        </tr>
                    )
                })
            }

            {/* <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">12</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">IXB</p>
                    <p className="text-gray-600 whitespace-no-wrap">Indira Gandhi International Airport</p>
                    <p className="text-gray-600 whitespace-no-wrap">Delhi</p>

                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">10:00:00</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">PUN</p>
                    <p className="text-gray-600 whitespace-no-wrap">Pue International Airport</p>
                    <p className="text-gray-600 whitespace-no-wrap">Pune</p>

                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">12:00:00</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">1820</p>
                    <p className="text-gray-600 whitespace-no-wrap">KM</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">₹8894</p>
                    <p className="text-gray-600 whitespace-no-wrap"></p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 cursor-pointer hover:scale-110 transition duration-150 font-semibold text-red-900 leading-tight"
                    >
                        <span className="px-2 py-0.5 bg-red-200 rounded-xl transition duration-150 ease-out">Edit</span>
                    </span>
                </td>
            </tr> */}

        </tbody>
    )
}

export default FlightData;