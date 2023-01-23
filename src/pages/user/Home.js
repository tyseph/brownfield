import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import changeIcon from '../../elements/exchangeWhite.png';
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import Cards from './Cards';
import {useDispatch} from "react-redux"
import { getAllAirport} from '../../redux/user/userActions';
import Navbar from './Navbar';
import Cover from './Cover';
import ImageCards from './ImageCards';
import SectionOne from './SectionOne';
import '../../styles/Home.css'
import axios from 'axios';
import SearchResult from './SearchResult';
import { getAllAiriports } from '../../api/FlightManagementService'
import plane from '../../elements/plane.png'

const Home = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [searchBarOn, setSearchBarOn] = useState(false)
  const [selectedFromCity, setSelectedFromCity] = useState('');
  const [selectedToCity, setSelectedToCity] = useState('');
  const [searchByWay, setSearchByWay] = useState({
    value: ""
  })

  const dispatch = useDispatch()
  const [searchDetails, setSearchDetails] = useState([])
  const [flightData, setFlightData] = useState([])

  var today = new Date().toISOString().split('T')[0];
  console.log()

  const Airports = () => {  
    getAllAiriports().then(res => {
      console.log(res)
      setFlightData(res.data)
      dispatch(getAllAirport(res.data))
    }).catch(err => {
      console.log(err)
    })
  }

  const [filterData, setFilterdata] = useState([]);


  const [data, setData] = useState({
    "source": 'BOM',
    "destination": 'PNQ',
    "dateOfTravelling": '12-02-2023',
    "noOfPassenger": 1,
    "dateOfReturn": ''
  })


  // console.log(data)

  const dataHandler = (e) => {
    // console.log(e.target[0].value)
    e.preventDefault()
    setData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))


  }
  const searchHandler = (e) => {
    e.preventDefault()
    console.log(data)
    if (selectedFromCity === selectedToCity)
      alert("Both City Cannot be same")
    else {
      // axios.post("http://LIN59017635.corp.capgemini.com:8081/search/userSearch", data).then(res => {
      //   console.log(res)
      //   { <SearchResult props={res.data} /> }
      //   setFilterdata(res.data)
      // }).catch(err => {
      //   console.log(err)
      // })
      props.SetSearchDetails(data)
      navigate("/flights")
    }
  }
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

  const switchCity = () => {
    setSelectedToCity(selectedFromCity)
    setSelectedFromCity(selectedToCity)
  }

  // console.log(selectedFromCity);
  // console.log(selectedToCity);


  const searchBarOpen = () => {
    setSearchBarOn(true)
  }

  const returnHandler = () => {
    console.log('khdksdlsmdl')
    console.log(document.getElementsByName('way')[1])
    console.log()
    // document.querySelector('input[name="way"]:checked').value = "ROUND TRIP"
    // console.log(document.querySelector('input[name="way"]:checked').value)
  }


  useEffect(() => {
    Airports()
  }, [])

  // console.log(element);
  return (
    <div>
      <Navbar />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 230"><path fill="#0F172A" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,90.7C672,75,768,85,864,112C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <div className='homePage'>
        <div className='homePageBanner'>
        </div>
        <div className="mt-0 md:col-span-2 md:mt-0 md:pt-2 md:pb-24 md:ml-20 md:mr-20 ml-6 mr-6 " >
          <form onSubmit={searchHandler}>
            <div className="sm:rounded-md rounded-md sm:pt-10 pt-20  pb-10  ">
              <div className='flightSearchBox'>
                <img className='flightImage' src={plane} height="80px" />
                <div className="flightsearch px-4 py-5 sm:p-6 bg-gray-900">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-12 md:mr-3 ">
                      <input type="radio" className="radio mr-2 sm:mr-1" name="way" value="ONEWAY" id="ONEWAY" onChange={dataHandler} checked />
                      <label for="ONEWAY" className='mr-3 sm:mr-4 text-sm text-white'>ONEWAY</label>
                      <input type="radio" className="radio mr-2 sm:mr-1" name="way" value="ROUND TRIP" id="ROUND TRIP" onChange={dataHandler} />
                      <label for="ROUND TRIP" className='mr-3 sm:mr-4 text-sm text-white'>ROUND TRIP</label>
                    </div>
                  </div>


                  <div className="grid grid-cols-9 gap-3 relative mt-5 mb-5">
                    <div className="col-span-12 sm:col-span-4 md:mr-3 relative">
                      <label name="source" className="block text-base   text-white font-bold">
                        From
                      </label>
                      <div className="dropdown-container text-base ">
                        <select required
                          name='source'
                          value={selectedFromCity}
                          onChange={(e) => { handleFromCitySelect(e); dataHandler(e) }}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >

                          {
                            flightData.map(p => {
                              return (
                                <option value={p.code}>{p.code + " - " + p.name}</option>

                              )
                            })
                          }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                        </div>
                      </div>
                    </div>
                    <div className="col-span- sm:col-span-1 md:mr-6 ml-11 mt-7 relative">
                      <img className='changeIcon' src={changeIcon} onClick={switchCity} />
                    </div>
                    <div className="col-span-12 sm:col-span-4 md:mr-3 ">
                      <label name="destination" className="block text-base   text-white font-bold">
                        To
                      </label>
                      <div className="dropdown-container text-base ">
                        <select required
                          name='destination'
                          value={selectedToCity}
                          onChange={(e) => { handleToCitySelect(e); dataHandler(e) }}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                          {
                            flightData.map(p => {
                              return (
                                <option value={p.code}>{p.code + " - " + p.name}</option>

                              )
                            })
                          }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-3  md:mr-3 ">
                      <label name="dateOfTravelling" className="block text-base   text-white font-bold">
                        Departure
                      </label>
                      <input
                        type="date"
                        min={today}
                        name="dateOfTravelling"
                        id="dateOfTravelling"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"
                        onChange={dataHandler}
                      />
                    </div>
                    {

                      <div className="col-span-12 sm:col-span-3  md:mr-3 ">
                        <label className="block text-base   text-white font-bold">
                          Return
                        </label>
                        <input
                          type="date"
                          min={today}
                          value={data.dateOfReturn}
                          name="dateOfReturn"
                          id="return"
                          autoComplete="given-name"
                          className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"
                          onChange={(e) => { dataHandler(e); returnHandler(e) }}
                        />
                      </div>
                    }
                    <div className="col-span-12 sm:col-span-3  md:mr-3 ">
                      <label name="noOfPassenger" className="block text-base   text-white font-bold">
                        Adult
                      </label>

                      <select name='noOfPassenger' className=" h-10 mt-3 block w-full rounded-md border-black sm:text-sm" onChange={dataHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>


                  </div>

                  <div className='search-button mt-2'>
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                    </button>
                  </div>
                </div>
                <ImageCards />
              </div>
            </div>
          </form>
        </div>


      </div >

      {/* <SectionOne /> */}

      <Cover />

      <Cards />

    </div >















  );
};

export default Home;
