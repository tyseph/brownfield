import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getFlightByID } from "../../../api/FlightManagementService";
import AllAirports from "./AllAirports";
import '../../../styles/FlightData.css'

const UpdateFlight = ({ airPorts, updateFlightData, update, changeUpdate, clear }) => {

    const [UpdateFlight, setUpdateFlight] = useState({
        sourceCode: update.sourceCode,
        destinationCode: update.destinationCode,
        timeOfDeparture: update.timeOfDeparture,
        timeOfArrival: update.timeOfArrival,
        flightStatus: update.flightStatus
    })

    const [toggle, setToggle] = useState(update.flightStatus);

    // useEffect(() => {
    //     getFlightByID(update.id).then(res => console.log(res.data))
    // }, [])
    // console.log(UpdateFlight, update)

    const handleOnChange = (e) => {
        e.preventDefault()
        setUpdateFlight({
            ...UpdateFlight,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (UpdateFlight.sourceCode !== "" && UpdateFlight.destinationCode !== "") {
            updateFlightData(update.flightId, UpdateFlight)
            toast.success(`FlightId ${update.flightId} Updated Successfully`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // clear()
            changeUpdate("", "", "", "", "", "", false)
        }
    }

    return (
        <div className="w-full mt-6">

            <div className="w-full bg-gray-900 p-8 rounded-lg">
                <label className="block uppercase text-center tracking-wide text-gray-100 text-2xl font-bold mb-6" htmlFor="grid-zip">
                    Update Flight data
                </label>
                <div className="flex flex-wrap justify-evenly mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Flight ID
                        </label>
                        <div className="rounded-md shadow-sm">
                            <input value={update.flightId} type="text" disabled className="block cursor-not-allowed appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Source Airport Code
                            </label>
                            <select name="sourceCode" value={UpdateFlight.sourceCode} id="source" onChange={handleOnChange} onSelect={handleOnChange} required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                <option selected disabled>Source code...</option>
                                {
                                    airPorts.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code}>{item.code}{":  "}{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {/* <AllAirports name="sourceCode" value={UpdateFlight.sourceCode} gap="pl-12" onChange={handleOnChange} menuItems={airPorts} placeholder="Source Code..." /> */}
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Destination Airport Code
                            </label>
                            <select name="destinationCode" value={UpdateFlight.destinationCode} id="destination" onChange={handleOnChange} onSelect={handleOnChange} required
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option disabled>Destination code...</option>
                                {
                                    airPorts.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code}>{item.code}{":  "}{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                </div>
                {/* <div className="flex flex-wrap text-center p-2 mx-6 mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataSource.name}
                            </label>
                            <p className="text-gray-100 text-xs italic">{dataSource.city}{", "}{dataSource.state}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-lg font-bold" htmlFor="grid-zip">
                                1820
                            </label>
                            <p className="text-gray-100 text-xs italic">KM</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataDestination.name}
                            </label>
                            <p className="text-gray-100 text-xs italic">{dataDestination.city}{", "}{dataDestination.state}</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-wrap justify-around mb-6">

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Flight Status
                        </label>
                        <div className="rounded-md mt-2 shadow-sm">
                            <label class="flex items-center mb-2 relative w-8 cursor-pointer select-none">
                                <input onClick={() => setUpdateFlight({
                                    ...UpdateFlight,
                                    flightStatus: !UpdateFlight.flightStatus
                                })}
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} type="checkbox" className="appearance-none outline-none ring-gray-800 ring-1 ring-offset-gray-800 transition-colors cursor-pointer w-11 h-4 rounded-full focus:outline-none bg-red-500" />
                                {/* <span class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
                                    <span class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span> */}
                                <span className="w-4 h-4 absolute rounded-full transform transition-transform bg-gray-200" />
                            </label>
                            <span class="text-gray-600 whitespace-no-wrap">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            {/* <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label> */}
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Departure Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture} onChange={handleOnChange} name="timeOfDeparture" type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Arrival Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfArrival} onChange={handleOnChange} name="timeOfArrival" type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <center className="justify-center flex flex-wrap gap-4 align-center">
                    <span className="block rounded-md shadow-sm">
                        <button onClick={handleClick} className="w-40 text-md
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white">Update</button>
                    </span>
                    <span className="block rounded-md shadow-sm">
                        <button onClick={() => changeUpdate()} className="w-40 text-md
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white
               bg-red-800
               bg-gradient-to-r
               from-red-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white ">Cancel</button>
                    </span>
                </center>
            </div >
        </div >
    )
}

export default UpdateFlight;