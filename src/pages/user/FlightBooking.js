import React from "react";

const FlightBooking = () => {

    return (
        <div>
            <section className="left">
                <div class="rounded overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-900">Flight Details</div>
                        <p class="text-gray-700 text-base text-white">
                            Mumbai to Delhi
                        </p>
                        <p class="text-gray-700 text-base text-white pt-2">
                            01/12/2023
                        </p>
                        <span class="text-gray-700 text-base text-white pt-2 relative">
                            Mumbai at 12:00
                        </span>
                        <span class="text-gray-700 text-base text-white pt-2 ml-44 relative">
                            <img className="absolute top-1 right-40 mr-10" src="https://img.icons8.com/material-rounded/24/111111/airplane-take-off.png" />
                            Delhi at 02:00
                        </span>
                        {/* <p class="text-gray-700 text-base text-white pt-2">
                         Delhi at 02:00
                        </p> */}

                    </div>

                    <hr />
                </div>
                <div class="rounded overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">

                    <div class="px-6 py-4 relative">
                        <div class="font-bold text-xl mb-2 text-gray-900">Passenger Details</div>
                        {/* <img className=" passengerDetails" src={"https://cdn-icons-png.flaticon.com/512/2534/2534884.png"}/> */}
                        <form>
                        <input type="radio" className="radio mr-2 sm:mr-1" name="gender" value="Male" id="Male" />
                        <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                        <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="Female" id="Female" />
                        <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br/>
                        {/* <label for="fname" className="text-gray-900 mt-4">First name:</label><br/> */}
                        <input type="text" name="fname" className="text-gray-900 rounded overflow-hidden shadow-lg bg-gray border-solid border-1 border-gray mr-20" placeholder="First name" />
                        {/* <label for="fname" className="text-gray-900 mt-4">First name:</label> */}
                        <input type="text" name="fname" className="text-gray-900 rounded overflow-hidden shadow-lg bg-gray border-solid border-1 border-gray " placeholder="Last name" />
                        <br/>
                        <input type="date" name="dob" className="text-gray-900 rounded overflow-hidden shadow-lg bg-gray border-solid border-1 border-gray mr-20 mt-8 pr-6" placeholder="DOB" />
                        <input type="text" name="fname" className="text-gray-900 rounded overflow-hidden shadow-lg bg-gray border-solid border-1 border-gray " placeholder="Last name" />
                        
                        </form>
                    </div>
                    <hr />
                </div>
                <div class="rounded overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-900">Contact Details</div>
                        <p class="text-gray-700 text-base text-white">
                            Mobile Number - 1234567890
                        </p>
                        <p class="text-gray-700 text-base text-white pt-2">
                            Email Id : aman@gmail.com
                        </p>
                    </div>

                </div>

            </section>











            <section className="right">
                <div class="rounded overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-900">All Fare Details</div>
                        <p class="text-gray-700 text-base text-white">
                            8090/- Rs
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )

}

export default FlightBooking;
