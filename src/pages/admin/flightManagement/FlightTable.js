import { useState } from 'react';
import FlightData from './FlightData';
import SearchByText from './SearchByText';
import SearchByTime from './SearchByTime';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const FlightTable = ({ flightCount }) => {

    const menuItems = [
        {
            value: "Morning",
            code: "morningFlights"
        },
        {
            value: "Afternoon",
            code: "aftenoonFlights"
        },
        {
            value: "Night",
            code: "nightFlights"
        }
    ]

    return (
        <div className="p-2 mt-6">
            <div className="">
                <div className='flex flex-wrap justify-start gap-2' >
                    <div className='flex flex-wrap gap-2'>
                        <SearchByText gap="pl-10" icon={<SearchIcon className="w-5 h-5 search-icon left-3 absolute" />} placeholderText="Flight ID..." />
                        <SearchByTime menuItems={menuItems} placeholder="Select Time..." />
                    </div>
                    <div className='flex flex-wrap gap-1'>
                        <SearchByTime gap="pl-12" menuItems={menuItems} placeholder="Source Code..." />
                        <SwapHorizIcon className='mt-4 sm:max-md:mt-4 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2' />
                        <SearchByTime gap="pl-12" menuItems={menuItems} placeholder="Destination Code..." />
                        {/* <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" /> */}
                    </div>
                    <div className='flex flex-nowrap gap-1'>
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Search</button>
                        </span>
                    </div>
                    <div className='flex flex-nowrap gap-1'>
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="flex justify-center px-4 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Clear</button>
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
                            <FlightData flightCount={flightCount} />
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FlightTable;