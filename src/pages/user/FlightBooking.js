import axios from "axios";
import React, { useEffect, useState } from "react";
import { getFlightByID } from "../../api/FlightManagementService"
import { useDispatch, useSelector } from "react-redux"
import { addBooking, getFlightById } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom"

const FlightBooking = (res) => {

    const [passengers, setPassengers] = useState({
        firstName: '',
        lastName: '',
        gender: '',
    });
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
                    gender: ''
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
            "travelCharges": 1000,
            "seatReserveCharges": 250,
            "ancillaryCharges": 100,
            "taxes": 0,
            "totalFare": 1350
        }
    }

    const contactData = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://LIN59017635.corp.capgemini.com:8089/booking/bookFlight", data).then(res => {
            console.log(res)
            dispatch(addBooking(res.data))
        }).catch(err => {
            console.log(err)
        })
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
        <div>
            <section className="left">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900   mt-5 ml-5 text-white ">

                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center" >Flight Details</div>
                        <p class="text-gray-700 text-base ml-4">
                            {res.FlightBooking.data.source} to {res.FlightBooking.data.destination}
                        </p>
                        <p class="text-gray-700 text-base text-white pt-2 ml-4">
                            {res.FlightBooking.data.dateOfTravelling}
                        </p>
                        <div className="mb-5">
                            <span class="text-gray-700 text-base text-white pt-2 ml-4 mb-5 relative">
                                {res.FlightBooking.data.source} at {res.FlightBooking.flights[0].flight.departureTime}
                            </span>
                            <span class="text-gray-700 text-base text-white pt-2 ml-44 relative">
                                <img className="absolute top-1 right-40 mr-10" src="https://img.icons8.com/material-rounded/24/111111/airplane-take-off.png" />
                                {res.FlightBooking.data.destination} at {res.FlightBooking.flights[0].flight.arrivalTime}
                            </span>
                            {/* <p class="text-gray-700 text-base text-white pt-2">
                         Delhi at 02:00
                        </p> */}
                        </div>
                    </div>

                    <hr />
                </div>





























                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">

                    <div class="relative">
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">Passenger Details</div>

                        <form>
                            <h1 className="text-black ml-4">Passenger {count} / {res.FlightBooking.numberOfPassenger}</h1>
                            <input type="radio" className="radio mr-2 sm:mr-1 mt-2 ml-4" name="gender" value="MALE" id="Male" onChange={passengerHandler} required />
                            <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                            <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="FEMALE" id="Female" onChange={passengerHandler} required />
                            <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br />
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 ml-4" id="Firstname" type="text" placeholder="Firstname" name="firstName" onChange={passengerHandler} value={passengers.firstName} required />
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700   mr-10 ml-4" id="Lastname" type="text" placeholder="Lastname" name="lastName" onChange={passengerHandler} value={passengers.lastName} required /><br />
                            {
                                count > passengerArray.length ?
                                    <button onClick={(e) => addPassenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-3 ml-4 mb-4"> Add </button>
                                    :
                                    <p className="text-gray-900 mt-4 ml-4">You Have Added {numberOfPassenger} passengers</p>
                            }
                            {/* <button onClick={(e) => passenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 roun7ded mt-3 ml-4 mb-4"> Submit </button> */}
                        </form>
                    </div>
                    <hr />
                </div>
























                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 mb-5 text-white">
                    <div >
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center ">Contact Details</div>
                        <form>
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 ml-4" type="number" placeholder="Mobile no." name="mobileno" onChange={(e) => setMobileNo(e.target.value)} required />
                            <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 mt-3 mb-5 ml-4" type="email" placeholder="emailId" name="emailId" onChange={(e) => setEmail(e.target.value)} required />
                        </form>
                    </div>

                </div>

                <button onClick={contactData} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 roun7ded mt-3 ml-4 mb-4"> Submit </button>

            </section>











            <section className="right mr-5">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">All Fare Details</div>
                        <p class="text-gray-700 text-base ml-4 ">
                            Base Fare
                        </p>
                        <p className="text-gray-700 text-base ml-4 mb-5">

                            Adult(s)   {numberOfPassenger} x {res.FlightBooking.fare} = {res.FlightBooking.fare * numberOfPassenger}
                        </p>


                    </div>

                </div>
            </section>
        </div>
    )

}

export default FlightBooking;
