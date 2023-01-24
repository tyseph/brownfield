import { useEffect, useState } from "react";
import { getFlightByID } from "../../../api/FlightManagementService";
import AllAirports from "./AllAirports";

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
    console.log(UpdateFlight, update)

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
            // clear()
            changeUpdate("", "", "", "", "", "", false)
        }
    }

    return (
        <div className="w-full mt-6">

            <center className="w-full bg-gray-900 p-8 rounded-lg">
                <label className="block uppercase text-center tracking-wide text-zinc-100 text-2xl font-bold mb-6" htmlFor="grid-zip">
                    Update Flight data
                </label>
                <div className="flex flex-wrap justify-center mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                            Flight ID
                        </label>
                        <div className="rounded-md shadow-sm">
                            <input value={update.flightId} type="text" disabled className="block cursor-not-allowed appearance-none w-auto bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
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
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Destination Airport Code
                            </label>
                            <select name="destinationCode" value={UpdateFlight.destinationCode} id="destination" onChange={handleOnChange} onSelect={handleOnChange} required
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option selected disabled>Destination code...</option>
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
                            <label className="block uppercase tracking-wide text-zinc-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataSource.name}
                            </label>
                            <p className="text-zinc-100 text-xs italic">{dataSource.city}{", "}{dataSource.state}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-lg font-bold" htmlFor="grid-zip">
                                1820
                            </label>
                            <p className="text-zinc-100 text-xs italic">KM</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataDestination.name}
                            </label>
                            <p className="text-zinc-100 text-xs italic">{dataDestination.city}{", "}{dataDestination.state}</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-wrap justify-around mb-6">

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                            Flight Status
                        </label>
                        <div className="rounded-md mt-2 shadow-sm">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" onClick={() => setUpdateFlight({
                                    ...UpdateFlight,
                                    flightStatus: !UpdateFlight.flightStatus
                                })}
                                    checked={UpdateFlight.flightStatus}
                                    value={UpdateFlight.flightStatus} className="sr-only peer" />
                                <div className="w-11 h-6 bg-red-400 peer-focus:outline-none rounded-full peer dark:bg-red-600 peer-checked:after:border-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{UpdateFlight.flightStatus ? "Active" : "Disabled"}</span>
                            </label></div>
                    </div>

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
                                Departure Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input value={UpdateFlight.timeOfDeparture} onChange={handleOnChange} name="timeOfDeparture" type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-zinc-100 text-xs font-bold" htmlFor="grid-zip">
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
                        <button onClick={handleClick} className="w-40 tracking-widest uppercase flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Update</button>
                    </span>
                    <span className="block rounded-md shadow-sm">
                        <button onClick={() => changeUpdate()} className="w-40 tracking-widest uppercase flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-red-900 hover:bg-sky-600 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Cancel</button>
                    </span>
                </center>
            </center >
        </div >
    )
}

export default UpdateFlight;