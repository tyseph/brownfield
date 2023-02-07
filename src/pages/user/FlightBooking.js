import axios from "axios";
import React, { useEffect, useState } from "react";
import { getFlightByID } from "../../api/FlightManagementService"
import { useDispatch, useSelector } from "react-redux"
import { addBooking, getFlightById } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom"
import { userFlightBooking } from "../../redux/user/userActions";

const FlightBooking = (res) => {

    const [passengers, setPassengers] = useState({
        firstName: '',
        lastName: '',
        gender: '',
    });
    const [totalFare, setTotalFare] = useState()
    const [travelCharges, setTravelCharges] = useState();
    const dispatch = useDispatch();
    const flight = useSelector((state) => state.user.flight)

    const navigate = useNavigate()
    console.log(res.FlightBooking.data.dateOfTravelling)

    console.log(res)
    const [flightData, setFlightData] = useState({});
    const [passengerArray, setPassengerArray] = useState([])
    const numberOfPassenger = res.FlightBooking.numberOfPassenger
    // const numberOfPassenger = 5
    const [count, setCount] = useState(1)
    const passengerHandler = (e) => {
        e.preventDefault()
        setPassengers(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(passengers)
    }

    const addPassenger = (e) => {
        e.preventDefault()
        console.log(passengers.firstName)
        if (passengers.firstName != "" && passengers.lastName != "" && passengers.gender != "") {
            if (count <= numberOfPassenger) {
                setPassengerArray(old => [
                    ...old, passengers
                ])
                if (count < numberOfPassenger)
                    setCount(count + 1)

                setPassengers({
                    firstName: '',
                    lastName: '',
                    gender: '',
                    seatNo: ''
                })

                var ele = document.querySelectorAll("input[type=radio]");
                for (var i = 0; i < ele.length; i++) {
                    ele[i].checked = false;
                }
            }
        }
        else {
            alert("please enter all details")
        }
    }
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState()
    const data = {
        "flightId": flightData.flightId,
        "email": email,
        "mobileNo": mobileNo,
        "dateOfTravelling": "2023-02-09",
        "passengerInfo": passengerArray,

        "fare": {
            "travelCharges": travelCharges,
            "seatReserveCharges": 250,
            "ancillaryCharges": 100,
            "taxes": 0,
            "totalFare": totalFare
        }
    }

    const contactData = (e) => {
        e.preventDefault()
        console.log(data)
        dispatch(userFlightBooking(data))
        navigate("/seats")
    }

    console.log(data)
    const passenger = (e) => {
        e.preventDefault()
        console.log("qwertyuiop")
        console.log(data)

    }

    console.log(passengerArray)



    useEffect(() => {

        // const charge = () => {
        setTravelCharges(res.FlightBooking.fare * numberOfPassenger)
        setTotalFare(data.fare.seatReserveCharges + data.fare.ancillaryCharges)
        console.log("akjdnk")
        // }

        getFlightByID(res.FlightBooking.id).then(res => {
            setFlightData(res.data)
            console.log(res.data)
            dispatch(getFlightById(res.data))

        }).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(data)
    return (
        <div className="p-2">
            <section className="left w-full">
                <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 mt-5 ml-5 text-white ">

                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center" >Flight Details</div>
                        <p class="text-gray-100 text-center tracking-wider text-bold text-2xl ml-4">
                            {res.FlightBooking.data.source} - {res.FlightBooking.data.destination}
                        </p>
                        <div className="flex flex-wrap ">
                            {/* <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold" htmlFor="grid-zip">
                                Departure Time
                            </label> */}

                        </div>
                        <p class="text-gray-100 text-center text-lg font-thin text-white ml-4">
                            {res.FlightBooking.data.dateOfTravelling}
                        </p>
                        <center className="mt-2">
                            <span class="text-gray-100 text-base text-white pt-2 ml-4 mb-5 relative">
                                {res.FlightBooking.data.source} at {res.FlightBooking.flights[0].flight.departureTime}
                            </span>
                            <span class="text-gray-100 text-base text-white pt-2 ml-44 relative">
                                <img className="absolute top-1 right-40 mr-10" src="https://img.icons8.com/material-rounded/24/ffffff/airplane-take-off.png" />
                                {res.FlightBooking.data.destination} at {res.FlightBooking.flights[0].flight.arrivalTime}
                            </span>
                            {/* <p class="text-gray-100 text-base text-white pt-2">
                         Delhi at 02:00
                        </p> */}
                        </center>
                    </div>

                    {/* <hr /> */}
                </div>




                <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900  mt-5 ml-5 text-white">

                    <div class="relative">
                        {/* <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">Passenger Details</div> */}
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center" >Passenger Details</div>

                        <form>
                            <h1 className="text-gray-100 ml-4">Passenger {count} / {res.FlightBooking.numberOfPassenger}</h1>
                            <div className="mt-2 ml-4 md:mr-3">
                                {/* <label name="way" className="block text-base text-white font-bold">
                                    TRIP TYPE
                                </label> */}
                                <div className='inline-flex flex gap-2'>
                                    <div className={`${passengers.gender === "MALE" ? "bg-white" : ""} flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                        <input checked={passengers.gender === "MALE" ? true : false} type="radio" name="gender" value="MALE" id="Male" onChange={passengerHandler} className={`${passengers.gender === "MALE" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                        <label for="Male" className={`${passengers.gender === "MALE" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Male</label>
                                    </div>
                                    <div className={`${passengers.gender === "FEMALE" ? "bg-white" : ""} flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                        <input checked={passengers.gender === "FEMALE" ? true : false} type="radio" name="gender" value="FEMALE" id="Female" onChange={passengerHandler} className={`${passengers.gender === "FEMALE" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                        <label for="Female" className={`${passengers.gender === "FEMALE" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Female</label>
                                    </div>
                                    <div className={`${passengers.gender === "OTHER" ? "bg-white" : ""} flex items-center px-4 border border-gray-200 rounded dark:border-gray-700`}>
                                        <input checked={passengers.gender === "OTHER" ? true : false} type="radio" name="gender" value="OTHER" id="Other" onChange={passengerHandler} className={`${passengers.gender === "OTHER" ? "text-gray-800" : "text-white"}  w-8 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
                                        <label for="Other" className={`${passengers.gender === "OTHER" ? "text-gray-900 dark:text-gray-900" : "text-white"} radio w-full py-2 px-3 text-sm font-medium`}>Other</label>
                                    </div>
                                </div>

                            </div>


                            {/* <input type="radio" className="radio mr-2 sm:mr-1 mt-2 ml-4" name="gender" value="MALE" id="Male" onChange={passengerHandler} required />
                            <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                            <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="FEMALE" id="Female" onChange={passengerHandler} required />
                            <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br /> */}

                            <div className="mt-3 ml-4 justify-start flex flex-wrap gap-2">
                                <div>

                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                        First Name
                                    </label>
                                    <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required />
                                </div>
                                <div>

                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                        Last Name
                                    </label>
                                    <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Lastname" type="text" placeholder="Last Name..." name="lastName" onChange={passengerHandler} value={passengers.lastName} required /><br />
                                </div>
                            </div>
                            {
                                count > passengerArray.length ?
                                    <button onClick={(e) => addPassenger(e)} className="ml-4 mt-2 text-sm
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







                <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900  mt-5 ml-5 mb-5 text-white">
                    <div >
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center ">Contact Details</div>
                        <form onSubmit={contactData}>
                            <div className="mt-3 ml-4 justify-start flex flex-wrap gap-2">
                                <div>

                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                        Mobile Number
                                    </label>
                                    {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}
                                    <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" minLength={10} maxLength={10} type="number" placeholder="Mobile Number..." name="mobileno" onChange={(e) => setMobileNo(e.target.value)} required />
                                </div>
                                <div>

                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                        Email ID
                                    </label>
                                    {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}
                                    {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Mobile no." name="mobileno" onChange={(e) => setMobileNo(e.target.value)} required /> */}
                                    <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email ID..." name="emailId" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            {/* <button className="ml-4 mt-2 text-md
                                    border-2 border-gray-800 py-2 px-4
                                    transition-colors ease-out
                                    duration-500 text-white
                                    bg-blue-800
                                    bg-gradient-to-r
                                    from-blue-800 
                                    rounded-lg
                                    hover:from-white hover:to-gray-300 
                                    hover:text-black hover:border-white uppercase tracking-wide"> Submit </button> */}
                        </form>
                    </div>

                </div>

                <button onClick={contactData} className="ml-4 text-md
            border-2 border-gray-100 py-2 px-4
            transition-colors ease-out
            duration-500 text-white
            bg-blue-900
            bg-gradient-to-r
            from-blue-900 
            rounded-lg
            hover:from-gray-900 hover:to-gray-900 
            hover:text-white hover:border-gray-900"> Select Seats </button>

            </section>











            <section className="right w-full mr-5">
                <div class="rounded-lg overflow-scroll p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
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
                {passengerArray.length > 0 ?
                    <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900  mt-5 ml-5 text-white">

                        <div class="relative">
                            <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">Passengers Added</div>

                            <form>
                                {passengerArray.map((item, index) => {
                                    return (
                                        <p class="text-gray-100 text-base ml-4">
                                            {index + 1}. {item.firstName} {item.lastName}, {item.gender}
                                        </p>
                                    )
                                })}
                                {/* <p class="text-gray-100 text-base ml-4">
                            {passengerArray[0].firstName} {passengerArray[0].lastName}, {passengerArray[0].gender}
                        </p> */}


                                {/* <h1 className="text-black ml-4">Passenger {count}</h1> */}
                                {/* <input type="radio" className="radio mr-2 sm:mr-1 mt-2 ml-4" name="gender" value="MALE" id="Male"/>
                        <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                        <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="FEMALE" id="Female"/>
                        <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br />
                        <text class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mr-10 ml-4" id="Firstname" type="text" placeholder="Firstname" name="firstName" value={passengers.firstName}/>
                        <text class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-100   mr-10 ml-4" id="Lastname" type="text" placeholder="Lastname" name="lastName" value={passengers.lastName}/><br /> */}
                                {/* {
                            count > passengerArray.length ?
                                <button onClick={(e) => addPassenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-3 ml-4 mb-4"> Add </button>
                                :
                                <p className="text-gray-900 mt-4 ml-4">You Have Added {numberOfPassenger} passengers</p>
                        } */}
                                {/* <button onClick={(e) => passenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 roun7ded mt-3 ml-4 mb-4"> Submit </button> */}
                            </form>
                        </div>
                        {/* <hr /> */}
                    </div>
                    : null}
            </section>
        </div>
    )

}

export default FlightBooking;
