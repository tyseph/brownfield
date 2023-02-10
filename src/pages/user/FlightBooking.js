import axios from "axios";
import React, { useEffect, useState } from "react";
import { getFlightByID } from "../../api/FlightManagementService"
import { useDispatch, useSelector } from "react-redux"
import { addBooking, getFlightById } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom"
import { userFlightBooking } from "../../redux/user/userActions";
import FlightDetails from "./FlightDetails"
import PassengerDetails from "./PassengerDetails";
import ContactDetails from "./ContactDetails";
import AllFareDetails from "./AllFareDetails";
import PrintPassengers from "./PrintPassengers";
import Navbar from "./Navbar"

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
        // console.log("akjdnk")
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
        <>
        
            <div className="grid sm:grid-cols-11 gap-8 p-2">
                <div className="sm:col-span-8 grid grid-rows-1 gap-2">
                    <FlightDetails res={res} />
                    <PassengerDetails res={res} addPassenger={addPassenger} passengers={passengers} count={count} passengerHandler={passengerHandler} passengerArray={passengerArray} numberOfPassenger={numberOfPassenger} />
                    <ContactDetails contactData={contactData} setMobileNo={mobileNo} setEmail={email} />
                </div>
                <div className="sm:col-span-3">
                    <AllFareDetails numberOfPassenger={numberOfPassenger} res={res} data={data} totalFare={totalFare} travelCharges={travelCharges} />
                    <PrintPassengers passengerArray={passengerArray} />
                </div>
            </div>
            <div className="pb-4">
                <button onClick={contactData} className="ml-2 w-40 text-md
                    border-2 border-gray-100 py-2 px-4
                    transition-colors ease-out
                    duration-500 text-white
                    bg-blue-900
                    bg-gradient-to-r
                    from-blue-900 
                    rounded-lg
                    hover:from-gray-900 hover:to-gray-900 
                    hover:text-white hover:border-gray-900">
                    Select Seats
                </button>

            </div>
        </>
    )

}

export default FlightBooking;
