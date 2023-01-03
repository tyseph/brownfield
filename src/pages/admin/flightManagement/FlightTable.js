import { useState } from 'react';
import FlightData from './FlightData';
import SearchByText from './SearchByText';
import SearchByTime from './SearchByTime';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

const FlightTable = () => {

    return (
        <div className="p-2">
            <div className="pt-8">
                <div className='flex flex-wrap justify-start gap-2' >
                    <div className='flex flex-wrap gap-2'>
                        <SearchByText gap="pl-10" icon={<SearchIcon className="w-5 h-5 search-icon left-3 absolute" />} placeholderText="Search by Flight ID..." />
                        <SearchByTime />
                    </div>
                    <div className='flex flex-nowrap gap-1'>
                        <SearchByText gap="pl-2" placeholderText="Source..." />
                        <FlipCameraAndroidIcon className='mt-4 sm:max-md:mt-2 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2' />
                        <SearchByText gap="pl-2" placeholderText="Destination..." />
                        <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" />
                    </div>
                    <div>
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-500 to-sky-600 hover:bg-gradient-to-r hover:from-sky-500 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition duration-250 ease-in-out">Get All Flights</button>
                        </span>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="icontainer mx-auto shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead className=''>
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
                            <FlightData />
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FlightTable;