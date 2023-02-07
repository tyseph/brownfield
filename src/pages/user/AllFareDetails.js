const AllFareDetails = ({ numberOfPassenger, res, data, totalFare, travelCharges }) => {

    console.log(travelCharges)
    return (
        <div class="rounded-lg overflow-scroll p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white mb-2">
            <div>
                <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">All Fare Details</div>
                <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                    Base Fare
                </p>
                <p className="text-gray-100 text-sm font-thin tracking-wider ml-4 mb-5" >
                    Adult(s)   {numberOfPassenger} x {res.FlightBooking.fare} = {"₹ "}{res.FlightBooking.fare * numberOfPassenger}
                </p>
                <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                    Seat Reservation Charges
                </p>
                <p className="text-gray-100 text-sm font-thin tracking-wider ml-4 mb-5" >
                    Adult(s)   {numberOfPassenger} x {data.fare.seatReserveCharges} = {"₹ "}{data.fare.seatReserveCharges * numberOfPassenger}
                </p>

                <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                    Total Fare
                </p>
                <p className="text-gray-100 text-sm font-thin tracking-wider ml-7 mb-5" >
                    {"₹ "}{totalFare + travelCharges}
                </p>
            </div>

        </div>
    )
}

export default AllFareDetails;