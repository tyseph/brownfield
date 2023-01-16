import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightData from '../admin/flightManagement/FlightData';
import FlightTable from "../admin/flightManagement/FlightTable";
import SearchByText from "../admin/flightManagement/SearchByText";
import SearchByTime from "../admin/flightManagement/SearchByTime";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import SearchFlight from "./SearchFlight";
import { getAllAiriports } from "../../api/FlightManagementService";

const SearchResult = ({ res }) => {


    const [flightData, setFlightData] = useState([])


    const dataHandler = (e) => {
        // console.log(e.target[0].value)
        e.preventDefault()
        setData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }




    var today = new Date().toISOString().split('T')[0];
    const [data, setData] = useState({
        "source": "BOM",
        "destination": "PNQ",
        "dateOfTravelling": "2022-12-01",
        "noOfPassenger": 9,
        "dateOfReturn": ''
    })


    const [airport, setAirport] = useState([])

    const handleOnChange = (e) => {
        e.preventDefault();
        setData({
           ...data,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     searchFlight(input.time)
    // }

    const [selectedFromCity, setSelectedFromCity] = useState('');
    const [selectedToCity, setSelectedToCity] = useState('');

    const [flights, setFlights] = useState([]);

    const handleFromCitySelect = (e) => {
        console.log(e.target.value);
        setSelectedFromCity(e.target.value);
        // setData({
        //   source: selectedFromCity
        // })
    }
    // console.log(selectedFromCity);
    const handleToCitySelect = (e) => {
        setSelectedToCity(e.target.value);
        // setData({
        //   destination: selectedToCity
        // })
    }
    // const data = {
    //     "source": "BOM",
    //     "destination": "PNQ",
    //     "dateOfTravelling": "2022-12-01",
    //     "noOfPassenger": 9
    // }

    //   let flights = []
    useEffect(() => {
        axios.post("http://LIN59017635:8081/userSearch", data).then(res => {
            console.log(res.data.flights)
            setFlights(res.data.flights)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        getAllAiriports().then(res => {
            console.log(res)
            setAirport(res.data)
          }).catch(err => {
            console.log(err)
          })
    },[])


    console.log(flights)
    return (
        <div>
            <div className='flex flex-wrap justify-start gap-2 searchnav bg-gray-900 pt-5 pl-5 pr-5 pb-2' >
                <div className='flex flex-wrap gap-9'>
                    {/* <div className="dropdown-container text-base ">
                        <select required
                            name='source'
                            value={selectedFromCity}
                            onChange={(e) => { handleFromCitySelect(e); dataHandler(e) }}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >

                            {
                                flightData.map(p => {
                                    return (
                                        <option value={p.code}>{p.code + " " + p.name}</option>

                                    )
                                })
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                        </div>
                    </div> */}
                    <SearchFlight gap="pl-12" airport={airport} onChange={handleOnChange} placeholder="Flight Code..." />
                    {/* <SwapHorizIcon className='mt-4 sm:max-md:mt-4 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2' /> */}
                    <SearchFlight gap="pl-12" airport={airport} onChange={handleOnChange} placeholder="Destination Code..." />
                    {/* <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" /> */}
                    <input className="bg-gray-900 text-white" type="date" min={today} />
                    <input className="bg-gray-900 text-white" type="date" min={today} />
                    <select name='noOfPassenger' className="bg-gray-900 text-white w-44 mr-20">
                        {/* <option value="0">0</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
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
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Flight ID
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Source
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Departure-Time
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Destination
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Arrival
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Distance/Time
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Fare
                                </th>
                                <th
                                    className="px-5 py-3 text-center border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                                >
                                    Book
                                </th>

                            </tr>
                        </thead>
                        <tbody >

                            {
                                flights.map(p => {
                                    return (
                                        <tr className="mt-9">
                                            <td className="text-center">{p.flight.flightId}</td>
                                            <td className="text-center">{p.flight.source.city}</td>
                                            <td className="text-center">{p.flight.departureTime}</td>
                                            <td className="text-center">{p.flight.destination.city}</td>
                                            <td className="text-center">{p.flight.arrivalTime}</td>
                                            <td className="text-center">{Math.round(p.flight.distance)}{" KM"}</td>
                                            <td className="text-center">{p.fare}</td>
                                            <td className="text-center">
                                                <Link to={`/${p.flight.flightId}/flightbooking`}>
                                                    <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Book</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;