import { useState } from 'react';
import FlightData from './FlightData';
import SearchByText from './SearchByText';
import SearchByTime from './SearchByTime';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AllAirports from './AllAirports';
import UpdateFlight from './UpdateFlight';
// import src from 'react-select/dist/declarations/src';

const FlightTable = ({ flights, searchFlight, updateFlightData, airPorts, clear, toggleFlightStatus }) => {

    const [update, setUpdate] = useState({
        flightId: "",
        sourceCode: "",
        destinationCode: "",
        timeOfDeparture: "",
        timeOfArrival: "",
        state: false
    })


    const [input, setInput] = useState({
        flightId: undefined,
        time: "",
        src: "",
        des: ""
    });

    const menuItems = [
        {
            value: "Morning",
            code: "morningFlights"
        },
        {
            value: "Afternoon",
            code: "afternoonFlights"
        },
        {
            value: "Night",
            code: "nightFlights"
        }
    ]

    const handleOnChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        // console.log(input)
        searchFlight(input)
    }

    const changeUpdate = (id, sourceCode, destinationCode, timeOfDeparture, timeOfArrival, flightStatus, state) => {
        // console.log(id)
        setUpdate({
            flightId: id,
            sourceCode: sourceCode,
            destinationCode: destinationCode,
            timeOfDeparture: timeOfDeparture,
            timeOfArrival: timeOfArrival,
            flightStatus: flightStatus,
            state: state
        })
    }

    return (
        <div className="p-2 mt-6">
            {update.state ? <UpdateFlight clear={clear} update={update} changeUpdate={changeUpdate} airPorts={airPorts} updateFlightData={updateFlightData} /> :
                <div className="">
                    <div className='flex flex-wrap justify-start gap-2' >
                        <div className='flex flex-wrap gap-2'>
                            <SearchByText name="flightId" value={input.flightId} onChange={handleOnChange} gap="pl-2" placeholderText="F-BF-" />
                            <SearchByTime name="time" value={input.time} onChange={handleOnChange} menuItems={menuItems} placeholder="Select Time..." />
                        </div>
                        <div className='flex flex-wrap gap-1'>
                            <AllAirports name="src" value={input.src} gap="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900" onChange={handleOnChange} menuItems={airPorts} placeholder="Source Code..." />
                            <SwapHorizIcon className='mt-4 sm:max-md:mt-4 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2' />
                            <AllAirports name="des" value={input.des} gap="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900" onChange={handleOnChange} menuItems={airPorts} placeholder="Destination Code..." />
                            {/* <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" /> */}
                        </div>
                        <div className='flex flex-nowrap'>
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={handleSubmit} type="submit" className="flex justify-center px-6 py-2.5 text-sm font-bold text-zinc-200 hover:text-white bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-900 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in-out duration-250 ">
                                    Search
                                </button>
                            </span>
                        </div>
                        <div className='flex flex-nowrap gap-1'>
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={() => clear()} type="submit" className="flex justify-center px-6 py-2.5 text-sm font-bold text-zinc-200 hover:text-white bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-900 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in-out duration-250">Get All</button>
                            </span>
                        </div>
                    </div>

                    <div className="py-4 overflow-auto">
                        <div
                            className="container mx-auto shadow-md rounded-lg overflow-auto"
                        >
                            <table className="w-full">
                                <thead className='w-full'>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Flight ID
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Source
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Departure
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Destination
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Arrival
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Distance/Time
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                        >
                                            Edit
                                        </th>

                                    </tr>
                                </thead>
                                <FlightData update={changeUpdate} toggleFlightStatus={toggleFlightStatus} flights={flights} />
                            </table>
                        </div>
                    </div>
                </div>}
        </div >
    )
}

export default FlightTable;