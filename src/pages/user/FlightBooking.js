import React, { useState } from "react";

const FlightBooking = () => {

    const [passengers, setPassengers] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        age: '',
        gender: ''
    });

    const [passengerArray, setPassengersArray] = useState([])
    const numberOfPassenger = 2
    const [count, setCount] = useState(1)
    const passengerHandler = (e) => {
        e.preventDefault()
        setPassengers(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(passengers)
    }

    const passenger = (e) => {
        e.preventDefault()
        if (count <= numberOfPassenger) {
            setPassengersArray(old => [
                ...old, passengers
            ])
            if (count < numberOfPassenger)
                setCount(count + 1)

            setPassengers({
                firstName: '',
                lastName: '',
                dob: '',
                age: '',
                gender: ''
            })

            var ele = document.querySelectorAll("input[type=radio]");
            for (var i = 0; i < ele.length; i++) {
                ele[i].checked = false;
            }
        }
    }

    console.log(passengerArray)
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
                        <form onSubmit={(e) => passenger(e)}>
                            <h1 className="text-black">Passenger {count}</h1>
                            <input type="radio" className="radio mr-2 sm:mr-1 mt-2" name="gender" value="Male" id="Male" onChange={passengerHandler} required />
                            <label for="Male" className='mr-3 sm:mr-4 text-sm text-gray-900'>Male</label>
                            <input type="radio" className="radio mr-2 sm:mr-1 mb-4" name="gender" value="Female" id="Female" onChange={passengerHandler} required />
                            <label for="Female" className='mr-3 sm:mr-4 text-sm text-gray-900'>Female</label><br />
                            {/* <label for="fname" className="text-gray-900 mt-4">First name:</label><br/> */}
                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10" id="Firstname" type="text" placeholder="Firstname" name="firstName" onChange={passengerHandler} value={passengers.firstName} required />
                            {/* <label for="fname" className="text-gray-900 mt-4">First name:</label> */}
                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10" id="Lastname" type="text" placeholder="Lastname" name="lastName" onChange={passengerHandler} value={passengers.lastName} required /><br />

                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 mt-5" id="DOB" type="date" placeholder="DOB" name="dob" onChange={passengerHandler} value={passengers.dob} required />
                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10" id="Age" type="number" placeholder="Age" name="age" onChange={passengerHandler} value={passengers.age} required /><br />
                           
                           {
                            count>passengerArray.length ? 
                            <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-3"> Submit </button>
                            :
                            <p className="text-gray-900">You Have Added { numberOfPassenger } passengers</p>
                           }
                        
                        </form>
                    </div>
                    <hr />
                </div>
                <div class="rounded overflow-hidden shadow-lg bg-gray border-solid border-2 border-gray-900  mt-5 ml-5 text-white">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-900">Contact Details</div>
                        <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10" type="number" placeholder="Mobile no." name="mobileno" required /><br />
                        <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-10 mt-3" type="email" placeholder="emailId" name="emailId" required /><br />
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
