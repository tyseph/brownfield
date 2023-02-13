import React, { useEffect, useState } from "react";
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { addBooking } from "../../redux/user/userActions";
import { getBookedSeats } from "../../api/BookingManagementService";
import useRazorpay, { RazorpayOptions, createOrder } from "react-razorpay";
import Payments from "./PaymentGateway";
import { Navigate, useNavigate } from "react-router-dom";
import Seats from "./Seats";
import '../../styles/Seats.css'




const Deck = () => {
    const colOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const colTwo = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,];
    const colThree = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,]
    const colFour = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,];
    const colFive = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    const colSix = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

    const [order, setOrder] = useState({})
    const [tmp, setTmp] = useState({})

    const [booked, setBooked] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.booking)
    console.log(data)
    const numberOfPassenger = data.passengerInfo.length
    // const Razorpay = useRazorpay();


    const seatarr = []
    var bgcolor = ''
    // const pick = (p) => {
    //     console.log(p)
    //     seatarr.push(p)
    //     document.getElementById(p).style.backgroundColor = 'blue'
    //     console.log(document.getElementById(p))

    // }


    // console.log(data.seatNo)

    // console.log(data)


    // data.passengerInfo.seatNo = 5
    // console.log(data)
    const navigate = useNavigate()


    const seatSubmit = async (e) => {
        console.log("RUN THIS", data)
        // let test = data.passengerInfo.length;
        for (let i = 0; i < data.passengerInfo.length; i++) {
            data.passengerInfo[i].seatNo = seatarr[i]
            console.log(data.passengerInfo[i])
        }
        { <Payments data={data} /> }
        navigate("/payment", { state: { data } })
    }


    const seatHandler = (p) => {
        console.log(p)
        if (seatarr.length <= numberOfPassenger) {

            if (seatarr.length < numberOfPassenger && !booked.includes(p) && !seatarr.includes(p)) {
                seatarr.push(p)
                document.getElementById(p).style.backgroundColor = "#55c66e"
            }
            else if (seatarr.includes(p)) {
                document.getElementById(p).style.backgroundColor = ""
                seatarr.splice(seatarr.indexOf(p), 1)
            }
        }
        // console.log(data.passengerInfo.seatNo)
    }


    useEffect(() => {
        console.log(data.seatNo)
        getBookedSeats(data.flightId, data.dateOfTravelling)
            .then(res => {
                setBooked(res.data)
                console.log(booked)
            }).catch(err => { console.log(err) })
    }, [])

    console.log(booked);
    return (
        <div className="">
            {/* <div class="rotated-half-circle"></div> */}
            <div className="absolute">
                <div class="rounded-lg m-3 overflow-scroll p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white mb-2">
                    <div>
                        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">All Fare Details</div>
                        <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                            Base Fare
                        </p>
                        <p className="text-gray-100 text-sm font-thin tracking-wider ml-4 mb-5" >
                            Adult(s)   {numberOfPassenger} x {data.fare.travelCharges - data.fare.totalFare}
                        </p>
                        <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                            Seat Reservation Charges
                        </p>
                        <p className="text-gray-100 text-sm font-thin tracking-wider ml-4 mb-5" >
                            Adult(s)   {numberOfPassenger} x {data.fare.seatReserveCharges} = {"₹ "}{numberOfPassenger * data.fare.seatReserveCharges}
                        </p>

                        <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                            Auxilary Charges
                        </p>
                        <p className="text-gray-100 text-sm font-thin tracking-wider ml-7 mb-5" >
                            {/* {"₹ "}{totalFare + travelCharges} */}
                            {"₹ "}{data.fare.ancillaryCharges}
                        </p>

                        <hr className="border border-gray-600" />
                        <p class="text-gray-100 text-lg ml-4 font-bold tracking-wide ">
                            Total Fare
                        </p>
                        <p className="text-gray-100 text-sm font-thin tracking-wider ml-7 mb-5" >
                            {/* {"₹ "}{totalFare + travelCharges} */}
                            {"₹ "}{data.fare.travelCharges}
                        </p>
                    </div>

                    <button className="ml-4 mt-3 text-md
               border-2 border-gray-800 py-2 px-8
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white" onClick={seatSubmit}> Go To Payments </button>
                    <label className="block uppercase tracking-wide text-gray-100 text-wrap w64 text-xs ml-4 mt-4 font-thin" htmlFor="grid-zip">
                        *Seats will be automatically assgined if not selected
                    </label>
                </div>

            </div>

            <div className="plane">
                <div className="cockpit pt-12">
                    <h1 className="text-gray-900 whitespace-no-wrap uppercase">BrownField Airline</h1>
                    <h1 className="text-gray-600 whitespace-no-wrap uppercase">Cockpit</h1>
                </div>
                <div className="exit2 grid grid-cols-6 fuselage py-8">
                    <div className="colOne pr-4">
                        {
                            colOne.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className="colTwo pr-4">
                        {
                            colTwo.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className="colThree pr-4">
                        {
                            colThree.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className="colFour pl-4">
                        {
                            colFour.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className="colFive pl-4">
                        {
                            colFive.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className="colSix pl-4">
                        {
                            colSix.map(p => {
                                return (
                                    // <div class="seats">
                                    <div className="seats cursor-pointer" id={p}
                                        {
                                        ...booked.includes(p) ?
                                            bgcolor = "red" :
                                            bgcolor = ""
                                        }

                                        style={{
                                            backgroundColor: bgcolor,
                                            borderRadius: '10px'
                                        }}
                                        onClick={() => seatHandler(p)}>
                                        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                                        <p className='cursor-pointer font-xs text-center'>{p}</p>
                                    </div>

                                    // </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Deck;