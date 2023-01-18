import axios from "axios";
import React, { useEffect, useState } from "react";
import {getFlightByID} from "../../api/FlightManagementService"

const FlightBooking = (res) => {

    const [passengers, setPassengers] = useState({
        firstName: '',
        lastName: '',
        gender: '',
    });

    console.log(res)
    const [flightData, setFlightData] = useState({});
    const [passengerArray, setPassengerArray] = useState([])
    const numberOfPassenger = res.FlightBooking.numberOfPassenger
    const [count, setCount] = useState(numberOfPassenger)
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
        else{
            alert("please enter all details")
        }
    }
    const data = {
        "flightId": 1,
        "email": "hemant@email.com",
        "mobileNo": "1234567980",
        "dateOfTravelling": "2022-01-11",
        "passengerInfo":
            passengerArray

    }
    const passenger = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://LIN59017635.corp.capgemini.com:8082/booking/bookFlight", data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    console.log(passengerArray) 

    useEffect(()=>{
        getFlightByID(res.FlightBooking.id).then(res=>{
            setFlightData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    console.log(flightData)
    return (
        <div>
            <section className="left">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900   mt-5 ml-5 text-white ">

                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center" >Flight Details</div>
                        <p class="text-gray-700 text-base ml-4">
                           {/* {flightData.source.city} to {flightData.destination.city} */}
                        </p>
                        <p class="text-gray-700 text-base text-white pt-2 ml-4">
                           {res.FlightBooking.dateOfTravelling}
                        </p>
                        <div className="mb-5">
                            <span class="text-gray-700 text-base text-white pt-2 ml-4 mb-5   relative">
                            {/* {flightData.source.city} at {flightData.departureTime} */}
                            </span>
                            <span class="text-gray-700 text-base text-white pt-2 ml-44 relative">
                                <img className="absolute top-1 right-40 mr-10" src="https://img.icons8.com/material-rounded/24/111111/airplane-take-off.png" />
                                {/* {flightData.destination.city} at {flightData.arrivalTime} */}
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
                            <button onClick={(e) => passenger(e)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 roun7ded mt-3 ml-4 mb-4"> Submit </button>
                        </form>
                    </div>
                    <hr />
                </div>
























                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 mb-5 text-white">
                    <div >
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center ">Contact Details</div>
                        <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 ml-4" type="number" placeholder="Mobile no." name="mobileno" max="10" min="10" required />
                        <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 mt-3 mb-5" type="email" placeholder="emailId" name="emailId" required />
                    </div>

                </div>

            </section>











            <section className="right mr-5">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">All Fare Details</div>
                        <p class="text-gray-700 text-base ml-4 ">
                            Base Fare
                        </p>
                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>
                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>

                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>

                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>

                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>


                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>
                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>
                        <p class="text-gray-700 text-base ml-4 mb-5">
                            Adult(s) (1x4440) = 4440
                        </p>

                    </div>

                </div>
            </section>
        </div>
    )

}

export default FlightBooking;
