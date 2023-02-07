const FlightDetails = ({ res }) => {
    console.log(res)
    return (
        <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white ">

            <p class="font-bold text-xl text-white bg-gray-900 text-center mb-2" >Flight Details</p>
            <div className="grid grid-rows-3 gap-2">
                <p class="text-gray-100 text-center tracking-wider text-bold text-3xl">
                    {res.FlightBooking.data.source} - {res.FlightBooking.data.destination}
                </p>
                {/* <div className="flex flex-wrap ">
                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold" htmlFor="grid-zip">
                                Departure Time
                            </label>

                </div> */}
                <p class="text-gray-100 text-center text-lg font-thin text-white">
                    {res.FlightBooking.data.dateOfTravelling}
                </p>
                <center className="grid sm:grid-cols-2 gap-2">
                    <span class="text-gray-100 text-base text-white relative">
                        {res.FlightBooking.data.source} at {res.FlightBooking.flights[0].flight.departureTime}
                    </span>
                    <span class="text-gray-100 text-base text-white relative">
                    <img className="block sm:hidden" src="https://img.icons8.com/material-rounded/24/ffffff/airplane-take-off.png" />
                        <img className="absolute hidden sm:block" src="https://img.icons8.com/material-rounded/24/ffffff/airplane-take-off.png" />
                        {res.FlightBooking.data.destination} at {res.FlightBooking.flights[0].flight.arrivalTime}
                    </span>
                    {/* <p class="text-gray-100 text-base text-white pt-2">
                         Delhi at 02:00
                        </p> */}
                </center>
            </div>

            {/* <hr /> */}
        </div>
    )
}

export default FlightDetails