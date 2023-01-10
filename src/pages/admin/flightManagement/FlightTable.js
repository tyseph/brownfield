import { useState } from 'react';
import FlightData from './FlightData';
import SearchByText from './SearchByText';
import SearchByTime from './SearchByTime';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AllAirports from './AllAirports';

const FlightTable = ({ flights, searchFlight, clear, airPorts }) => {

    const [input, setInput] = useState({
        flightId: "",
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
        console.log(input)
        searchFlight(input)
        setInput({
            flightId: "",
            time: "",
            src: "",
            des: ""
        })
        // if (input.flightId !== "") {
        //     searchFligthID(input.flightId)
        //     // console.log(searchFligthID(input.flightId))
        //     setInput({
        //         flightId: "",
        //         time: "",
        //         src: "",
        //         des: ""
        //     })
        //     return;
        // }
        // if (input.time !== "") {
        //     searchFlight(input.time)
        //     setInput({
        //         flightId: "",
        //         time: "",
        //         src: "",
        //         des: ""
        //     })
        //     return;
        // }
        // if (input.src !== "" && input.des !== "") {
        //     let tmp = {
        //         source: "",
        //         destination: ""
        //     }
        //     tmp.source = input.src
        //     tmp.destination = input.des
        //     console.log(tmp)
        //     searchFlightSrcDes(tmp)
        //     setInput({
        //         flightId: "",
        //         time: "",
        //         src: "",
        //         des: ""
        //     })
        // }
        // else {
        //     alert("No Filetrs Selected")
        // }
    }

    return (
        <div className="p-2 mt-6">
            <div className="">
                <div className='flex flex-wrap justify-start gap-2' >
                    <div className='flex flex-wrap gap-2'>
                        <SearchByText name="flightId" value={input.flightId} onChange={handleOnChange} gap="pl-10" icon={<SearchIcon className="w-5 h-5 search-icon left-3 absolute" />} placeholderText="Flight ID..." />
                        <SearchByTime name="time" value={input.time} onChange={handleOnChange} menuItems={menuItems} placeholder="Select Time..." />
                    </div>
                    <div className='flex flex-wrap gap-1'>
                        <AllAirports name="src" value={input.src} gap="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900" onChange={handleOnChange} menuItems={airPorts} placeholder="Source Code..." />
                        <SwapHorizIcon className='mt-4 sm:max-md:mt-4 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2' />
                        <AllAirports name="des" value={input.des} gap="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900" onChange={handleOnChange} menuItems={airPorts} placeholder="Destination Code..." />
                        {/* <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" /> */}
                    </div>
                    <div className='flex flex-nowrap gap-1'>
                        <span className="block w-full rounded-md shadow-sm">
                            <button onClick={handleSubmit} type="submit" className="flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Search</button>
                        </span>
                    </div>
                    <div className='flex flex-nowrap gap-1'>
                        <span className="block w-full rounded-md shadow-sm">
                            <button onClick={clear} type="submit" className="flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Clear</button>
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
                                        Fare
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                    >
                                        Edit
                                    </th>

                                </tr>
                            </thead>
                            <FlightData flights={flights} />
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FlightTable;