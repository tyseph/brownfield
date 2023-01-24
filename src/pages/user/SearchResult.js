import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightData from '../admin/flightManagement/FlightData';
import FlightTable from "../admin/flightManagement/FlightTable";
import { useDispatch } from "react-redux"
import SearchByText from "../admin/flightManagement/SearchByText";
import SearchByTime from "../admin/flightManagement/SearchByTime";
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchFlight from "./SearchFlight";
import { getAllAiriports, getFlightBySearch } from "../../api/FlightManagementService";
import { getAllFlights } from "../../redux/user/userActions";

const SearchResult = (res) => {

    const [flightData, setFlightData] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    console.log(res.SearchResult.source)
    // console.log(location)
    useEffect(() => {
        // setFlightData(location)
        console.log(res)
    }, [])

    const dispatch = useDispatch();
    const dataHandler = (e) => {
        // console.log(e.target[0].value)
        e.preventDefault()
        setData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }




    var today = new Date().toISOString().split('T')[0];
    const [data, setData] = useState({
        "source": res.SearchResult.source,
        "destination": res.SearchResult.destination,
        "dateOfTravelling": res.SearchResult.dateOfTravelling,
        "noOfPassenger": res.SearchResult.noOfPassenger,
        "dateOfReturn": res.SearchResult.dateOfReturn
    })

    console.log(data)


    const [airport, setAirport] = useState([])

    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    // const handleSubmit = (e) => {
    //     searchFlight(input.time)
    // }

    const [selectedFromCity, setSelectedFromCity] = useState('');
    const [selectedToCity, setSelectedToCity] = useState('');

    const [flights, setFlights] = useState([]);
    const [returnFlights, steReturnFlights] = useState([])

    const handleFromCitySelect = (e) => {
        console.log(e.target.value);
        setSelectedFromCity(e.target.value)
    }
    const handleToCitySelect = (e) => {
        setSelectedToCity(e.target.value);
    }

    const filter = (e) => {
        e.preventDefault()
        getFlightBySearch(data).then(res => {
            console.log("SAngam ", res.data)
            setFlights(res.data.flights)
            steReturnFlights(res.data.returnFlights)
            dispatch(getAllFlights(res.data.flights))
        }).catch(err => {
            console.log(err)
        })
    }

    const book = (e, fare) => {
        console.log(fare);
        res.SetFlightBooking({
            "id": e.target.value,
            "dateOfTravelling": res.SearchResult.dateOfTravelling,
            "numberOfPassenger": data.noOfPassenger,
            "fare": fare,
            data,
            flights
        })

        navigate(`/${e.target.value}/flightbooking`)
    }
    useEffect(() => {
        getAllAiriports().then(res => {
            console.log(res)
            setAirport(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        getFlightBySearch(data).then(res => {
            console.log(res)
            setFlights(res.data.flights)
            dispatch(getAllFlights(res.data.flights))
        }).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(flights)

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-1 searchnav bg-gray-900 pt-5 pl-5 pr-5 pb-2 ' >
                <form onSubmit={filter}>
                    <div className='flex flex-wrap gap-9'>
                        <SearchFlight gap="pl-12" name="source" airport={airport} onChange={handleOnChange} className="text-white" placeholder={data.source} />
                        <SearchFlight gap="pl-12" name="destination" airport={airport} onChange={handleOnChange} placeholder={data.destination} />
                        <input className="bg-gray-200 text-gray-900 border-solid border border-white rounded-md pl-2 pr-2 " name="dateOfTravelling" type="date" min={today} value={data.dateOfTravelling} onChange={handleOnChange} />
                        <input className="bg-gray-200 text-gray-900 border-solid border border-white rounded-md pl-2 pr-2 " name="dateOfReturn" type="date" min={today} value={data.dateOfReturn} onChange={handleOnChange} />
                        <select name='noOfPassenger' className="bg-gray-200 text-gray-900 border-solid border border-white rounded-md pl-2 pr-2 w-44" value={data.noOfPassenger} onChange={handleOnChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button type="submit" className="px-6 py-2.5 text-sm font-bold text-zinc-100 hover:text-white bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 ">Search</button>
                    </div>
                    <div className='flex flex-nowrap '>
                        <span className="block rounded-md shadow-sm">
                        </span>
                    </div>
                </form>
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
                                    Distance
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
                        <tbody className="gap-3" >

                            {
                                flights.map((p, index) => {
                                    return (
                                        <tr key={index} className="">
                                            {/* <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{index}</td> */}
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{p.flight.flightId}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{p.flight.source.city}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{p.flight.departureTime}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{p.flight.destination.city}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{p.flight.arrivalTime}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>{Math.round(p.flight.distance)}{" KM"}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} tracking-wide`}>{"₹ "}{p.fare}</td>
                                            <td className={`text-center py-3 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} items-center`}>
                                                {/* <Link to={`/${p.flight.flightId}/flightbooking`}> */}
                                                <button className=" items-center justify-center px-3 py-1 text-sm font-bold text-zinc-200 hover:text-white bg-gradient-to-r from-gray-900 to-gray-500 hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-900 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in-out duration-250 " value={p.flight.flightId} onClick={(e) => book(e, p.fare)}>Book</button>
                                                {/* </Link> */}
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