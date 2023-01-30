import { useEffect, useState } from "react";
import { getFlightByID } from "../../../api/FlightManagementService";

import { useDispatch, useSelector } from "react-redux";

const ViewBooking = ({ view, goBack }) => {
  const bookingDatas = useSelector((state) => state.admin.bookings);
  const [current, setCurrent] = useState({
    bookingId: "",
    dateOfBooking: "",
    dateOfTravelling: "",
    email: "",
    mobileNo: "",
    passengerInfo: []
  });

  const [fare, setFare] = useState({
    ancillaryCharges: "100",
    fareId: "",
    seatReserveCharges: "250",
    taxes: "",
    totalFare: "",
    travelCharges: "",
  })

  const [flight, setFlight] = useState({
    flightId: "",
    departureTime: "",
    source: "",
    arrivalTime: "",
    destination: "",
    distance: "",
    flightStatus: "",
  })

  // console.log("Selcetor in view Booking", view);
  const bookingData = () => {
    // if (bookingDatas.e.bookingId === view.id) {
    //   return e;
    // }
  };
  useEffect(() => {
    for (let i = 0; i < bookingDatas.length; i++) {
      if (bookingDatas[i].bookingId === view.bookingId) {
        // console.log(bookingDatas[i])
        setCurrent({
          bookingId: bookingDatas[i].bookingId,
          dateOfBooking: bookingDatas[i].dateOfBooking,
          dateOfTravelling: bookingDatas[i].dateOfTravelling,
          email: bookingDatas[i].email,
          mobileNo: bookingDatas[i].mobileNo,
          passengerInfo: bookingDatas[i].passengerInfo,
        });
        setFare({
          ancillaryCharges: bookingDatas[i].fare.ancillaryCharges,
          fareId: bookingDatas[i].fare.fareId,
          seatReserveCharges: bookingDatas[i].fare.seatReserveCharges,
          taxes: bookingDatas[i].fare.taxes,
          totalFare: bookingDatas[i].fare.totalFare,
          travelCharges: bookingDatas[i].fare.travelCharges,
        })
        setFlight({
          flightId: bookingDatas[i].flight.flightId,
          departureTime: bookingDatas[i].flight.departureTime,
          source: bookingDatas[i].flight.source.name,
          arrivalTime: bookingDatas[i].flight.arrivalTime,
          destination: bookingDatas[i].flight.destination.name,
          distance: bookingDatas[i].flight.distance,
        })


      }
    }
  }, []);

  // const bookingData = bookingDatas((e) => {
  //   if (e.bookingId === view.id) {
  //     console.log("NEW LOGGER", e.bookingId, view.id);
  //   }
  // });
  // const [UpdateFlight, setUpdateFlight] = useState({
  //     sourceCode: update.sourceCode,
  //     destinationCode: update.destinationCode,
  //     timeOfDeparture: update.timeOfDeparture,
  //     timeOfArrival: update.timeOfArrival,
  //     flightStatus: update.flightStatus
  // })

  // const [toggle, setToggle] = useState(update.flightStatus);

  // useEffect(() => {
  //     getFlightByID(update.id).then(res => console.log(res.data))
  // }, [])
  // console.log(UpdateFlight, update)

  // const handleOnChange = (e) => {
  //     e.preventDefault()
  //     setUpdateFlight({
  //         ...UpdateFlight,
  //         [e.target.name]: e.target.value
  //     })
  // }

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full ">
      <div className="w-full bg-gray-900 p-8 rounded-lg">
        <label
          className="block uppercase text-center tracking-wide text-gray-100 text-2xl font-bold mb-6"
          htmlFor="grid-zip"
        >
          View Booking Data
        </label>

        <label
          className="block uppercase text-center tracking-wider text-gray-100 text-xl font-normal mb-3"
          htmlFor="grid-zip"
        >
          Booking details
        </label>

        <div className="flex flex-wrap justify-start mb-6">

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Booking ID
            </label>
            <div className="rounded-md shadow-sm">
              <input
                value={current.bookingId}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Date of Booking
              </label>
              <input
                value={new Date(current.dateOfBooking).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "2-digit" }
                )}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Date of Travelling
              </label>
              <input
                value={new Date(current.dateOfTravelling).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "2-digit" }
                )}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />

            </div>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Email
            </label>
            <input
              value={current.email}
              type="text"
              disabled
              className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />

          </div>

          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Mobile number
              </label>
              <input
                value={current.mobileNo}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture}  name="timeOfDeparture" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Passenger details
              </label>
              {/* <input
                value={current.passengerInfo.length}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              /> */}
              <select name="passenger" id="passenger" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>{current.passengerInfo.length}</option>
                {
                  current.passengerInfo.map((item, index) => {
                    return (
                      <option disabled key={index} value={item.passengerId}>{item.passengerId}{": "}{item.firstName}{" "}{item.lastName}{", "}{item.gender[0]}{", "}{item.seatNo}</option>
                    )
                  })
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 fw-extrabold mr-20 flex items-center px-2 text-zinc-900">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival}  name="timeOfArrival" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
        </div>

        {/* <hr className="border border-4 border-gray-200" /> */}
        <hr class="w-2/3 mx-auto bg-gray-100 rounded md:my-10 dark:bg-gray-700"></hr>

        <label
          className="block uppercase text-center tracking-wider text-gray-100 text-xl font-normal mb-3"
          htmlFor="grid-zip"
        >
          Fare details
        </label>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Fare Id
            </label>
            <input
              value={fare.fareId}
              type="text"
              disabled
              className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {/* <div className="rounded-md mt-2 shadow-sm">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label></div> */}
          </div>

          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                seat Reservation Charges
              </label>
              <input
                value={`₹ ${fare.seatReserveCharges}`}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture}  name="timeOfDeparture" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Travel Charges
              </label>
              <input value={`₹ ${fare.travelCharges}`}

                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival}  name="timeOfArrival" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Auxillary Charges
            </label>
            <input
              value={`₹ ${fare.ancillaryCharges}`}
              type="text"
              disabled
              className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {/* <div className="rounded-md mt-2 shadow-sm">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label></div> */}
          </div>

          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                taxes
              </label>
              <input
                value={`₹ ${fare.taxes}`}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture}  name="timeOfDeparture" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Toatal fare
              </label>
              <input value={`₹ ${fare.totalFare}`}

                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival}  name="timeOfArrival" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
        </div>


        {/* arrivalTime
        :
        "18:55:00"
        departureTime
        :
        "08:45:00"
        destination
        :
        {code: 'PNQ', name: 'Pune Airport', city: 'Pune', state: 'Maharashtra', country: 'India', …}
        distance
        :
        124.76574933826953
        flightId
        :
        498
        flightStatus
        :
        true
        source
        :
        city
        :
        "Mumbai"
        code
        :
        "BOM"
        country
        :
        "India"
        elev
        :
        36
        lat
        :
        19.0932
        lon
        :
        72.8654
        name
        :
        "Chhatrapati Shivaji International Airport"
        state
        :
        "Maharashtra" */}

        <hr class="w-2/3 mx-auto bg-gray-100 rounded md:my-10 dark:bg-gray-700"></hr>

        <label
          className="block uppercase text-center tracking-wider text-gray-100 text-xl font-normal mb-3"
          htmlFor="grid-zip"
        >
          Flight details
        </label>


        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Flight Id
            </label>
            <input
              value={flight.flightId}
              type="text"
              disabled
              className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {/* <div className="rounded-md mt-2 shadow-sm">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label></div> */}
          </div>

          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                departureTime Time
              </label>
              <input
                value={flight.departureTime}
                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture}  name="timeOfDeparture" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                source
              </label>
              <input
                value={flight.source}

                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival}  name="timeOfArrival" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Distance
            </label>
            <input
              value={`${Math.round(flight.distance)} KM`}
              type="text"
              disabled
              className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {/* <div className="rounded-md mt-2 shadow-sm">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label></div> */}
          </div>

          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Arrival time
              </label>
              <input
                value={flight.arrivalTime}

                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture}  name="timeOfDeparture" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:mb-0">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Destination
              </label>
              <input
                value={flight.destination}


                type="text"
                disabled
                className="block cursor-not-allowed appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {/* <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival}  name="timeOfArrival" type="time" required className="block appearance-none w-3/5 bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div> */}
            </div>
          </div>
        </div>

        <center className="justify-center flex flex-wrap gap-4 align-center">
          <span className="block rounded-md shadow-sm">
            {/* <button onClick={handleClick} className="w-40 tracking-widest uppercase flex justify-center px-4 py-2.5 text-sm font-bold text-gray-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Update</button> */}
          </span>
          <span className="block rounded-md shadow-sm">
            <button onClick={goBack} className="w-40 text-md
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white
               bg-red-800
               bg-gradient-to-r
               from-red-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white ">Back</button>
          </span>
        </center>
      </div>
    </div >
  );
};

export default ViewBooking;
