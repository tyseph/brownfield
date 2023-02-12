const PassengerDetails = ({ res, addPassenger, passengers, count, passengerHandler, passengerArray, numberOfPassenger }) => {
    return (
        <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white">

            <div class="relative">
                {/* <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">Passenger Details</div> */}
                <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center" >Passenger Details</div>

                <h1 className="text-gray-100 px-4">Passenger {count} / {res.FlightBooking.numberOfPassenger}</h1>
                <form className="">
                    <div className="">
                        {/* <label name="way" className="block text-base text-white font-bold">
                                    TRIP TYPE
                                </label> */}
                        <div className='flex justify-start px-4 mb-4 flex-wrap'>
                            <div className={`${passengers.gender === "MALE" ? "bg-white" : ""} mr-4 flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                <input checked={passengers.gender === "MALE" ? true : false} type="radio" name="gender" value="MALE" id="Male" onChange={passengerHandler} className={`${passengers.gender === "MALE" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                <label for="Male" className={`${passengers.gender === "MALE" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Male</label>
                            </div>
                            <div className={`${passengers.gender === "FEMALE" ? "bg-white" : ""} mr-4 flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                <input checked={passengers.gender === "FEMALE" ? true : false} type="radio" name="gender" value="FEMALE" id="Female" onChange={passengerHandler} className={`${passengers.gender === "FEMALE" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                <label for="Female" className={`${passengers.gender === "FEMALE" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Female</label>
                            </div>
                            <div className={`${passengers.gender === "OTHERS" ? "bg-white" : ""} mr-4 flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                <input checked={passengers.gender === "OTHERS" ? true : false} type="radio" name="gender" value="OTHERS" id="Other" onChange={passengerHandler} className={`${passengers.gender === "OTHERS" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                <label for="Others" className={`${passengers.gender === "OTHERS" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Others</label>
                            </div>

                        </div>

                    </div>


                    {/* <input type="radio" className="radio mr-2 sm:mr-1 mt-2 ml-4" name="gender" value="MALE" id="Male" onChange={passengerHandler} required />
                            <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                            <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="FEMALE" id="Female" onChange={passengerHandler} required />
                            <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br /> */}

                    <div className="flex flex-wrap justify-start px-4 mb-4">
                        <div className="mr-4">

                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold" htmlFor="grid-zip">
                                First Name
                            </label>
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required />
                        </div>
                        <div className="mr-4">

                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold" htmlFor="grid-zip">
                                Last Name
                            </label>
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Lastname" type="text" placeholder="Last Name..." name="lastName" onChange={passengerHandler} value={passengers.lastName} required /><br />
                        </div>
                    </div>
                    {
                        count > passengerArray.length ?
                            <button onClick={(e) => addPassenger(e)} className="w-32 mx-4 text-sm
                                    border-2 border-gray-800 py-2 px-4
                                    transition-colors ease-out
                                    duration-500 text-white
                                    bg-blue-800
                                    bg-gradient-to-r
                                    from-blue-800 
                                    rounded-lg
                                    hover:from-white hover:to-gray-300 
                                    hover:text-black hover:border-white uppercase tracking-wide"> Add </button>
                            :
                            <p className="text-gray-100 mt-4 ml-4">You Have Added {numberOfPassenger} passengers</p>
                    }
                    {/* <button onClick={(e) => passenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 roun7ded mt-3 ml-4 mb-4"> Submit </button> */}
                </form>
            </div>
            {/* <hr /> */}
        </div>
    )
}

export default PassengerDetails;