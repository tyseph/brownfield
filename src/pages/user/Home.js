import React, { useState } from 'react';
import changeIcon from '../../elements/exchangeWhite.png';
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import Cards from './Cards';
import Navbar from './Navbar';
import Select from "react-select";
import Cover from './Cover';
import ImageCards from './ImageCards';
import SectionOne from './SectionOne';
import '../../styles/Home.css'



const Home = () => {

  const [open, setOpen] = useState(false)
  const [searchBarOn, setSearchBarOn] = useState(false)
  const [selectedFromCity, setSelectedFromCity] = useState('');
  const [selectedToCity, setSelectedToCity] = useState('');
  const [searchByWay, setSearchByWay] = useState({
    value: ""
  })
  const optionList = [
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Ahemdabad", label: "Ahemdabad" },
    { value: "Banglore", label: "Banglore" },
    { value: "Goa", label: "Goa" }
  ];
  const handleFromCitySelect = (e) => {
    console.log(e.target.value);
    setSelectedFromCity(e.target.value);
  }
  // console.log(selectedFromCity);
  const handleToCitySelect = (e) => {
    setSelectedToCity(e.target.value);
  }

  const switchCity = () => {
    setSelectedToCity(selectedFromCity)
    setSelectedFromCity(selectedToCity)
  }

  console.log(selectedFromCity);
  console.log(selectedToCity);

  // const wayMenu = [
  //   {
  //     value: "One Way",
  //   },
  //   {
  //     value: "Round Trip",
  //   },
  //   {
  //     value: "Multi-city",
  //   }
  // ]

  // console.log(searchByWay)
  const searchBarOpen = () => {
    setSearchBarOn(true)
  }
  return (
    <div>
      <Navbar />

      <div className='homePage'>
        <div className="mt-0 md:col-span-2 md:mt-0 md:pt-2 md:pb-24 md:ml-20 md:mr-20 ml-6 mr-6" >
          <form>
            <div className="sm:rounded-md rounded-md pt-10 pb-10 bg-white">
              <div className='flightSearchBox'>
                {/* <pre className='tag'>
                  {`Where Would You like to go?`}</pre> */}
                <img className='flightImage' src="https://www.freepnglogos.com/uploads/plane-png/plane-png-flights-airlines-msp-airport-1.png" height="80px" />
                <div className="flightsearch px-4 py-5 sm:p-6 ">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 sm:col-span-12 md:mr-3 ">
                      <input type="radio" className="radio mr-2 sm:mr-1" name="way" value="ONEWAY" id="ONEWAY" />
                      <label for="y" className='mr-3 sm:mr-4 text-sm text-white'>ONEWAY</label>
                      <input type="radio" className="radio mr-2 sm:mr-1" name="way" value="ROUND TRIP" id="ROUND TRIP" />
                      <label for="z" className='mr-3 sm:mr-4 text-sm text-white'>ROUND TRIP</label>
                      <input type="radio" className="radio mr-2 sm:mr-1" name="way" value="MULTI CITY" id="MULTI CITY" />
                      <label for="z" className='mr-3 sm:mr-4 text-sm text-white'>MULTI CITY</label>
                    </div>
                  </div>


                  <div className="grid grid-cols-9 gap-3 relative mt-5 mb-5">
                    <div className="col-span-12 sm:col-span-4 md:mr-3 relative">
                      <label htmlFor="first-name" className="block text-base   text-white font-bold">
                        From
                      </label>
                      <div className="dropdown-container text-base ">
                        <select required
                          value={selectedFromCity}
                          onChange={(e) => handleFromCitySelect(e)}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                          <option selected disabled>Source code...</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Banglore">Banglore</option>
                          <option value="Mumbai">Mumbai</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                        </div>
                      </div>
                    </div>
                    <div className="col-span- sm:col-span-1 md:mr-6 ml-11 mt-7 relative">
                      <img className='changeIcon' src={changeIcon} onClick={switchCity} />
                    </div>
                    <div className="col-span-12 sm:col-span-4 md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base   text-white font-bold">
                        To
                      </label>
                      <div className="dropdown-container text-base ">
                        <select required
                          value={selectedToCity}
                          onChange={(e) => handleToCitySelect(e)}
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                          <option selected disabled>Source code...</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Banglore">Banglore</option>
                          <option value="Mumbai">Mumbai</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-3  md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base   text-white font-bold">
                        Departure
                      </label>
                      <input
                        type="date"
                        name="departure"
                        id="departure"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"

                      />
                    </div>
                    <div className="col-span-12 sm:col-span-3  md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base   text-white font-bold">
                        Return
                      </label>
                      <input
                        type="date"
                        name="return"
                        id="return"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"

                      />
                    </div>
                    <div className="col-span-12 sm:col-span-1  md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base   text-white font-bold">
                        Adult
                      </label>
                      
                      {/* <input
                        type="number"
                        name="adult"
                        id="adult"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"
                      /> */}
                      <select name='adult'  className="pl-10 h-10 mt-3 block w-full rounded-md border-black sm:text-sm">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-span-12 sm:col-span-1  md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base text-white text-white font-bold">
                        Children
                      </label>
                      {/* <input
                        type="number"
                        name="children"
                        id="children"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"
                      /> */}
                      <select name='children'  className="pl-10 h-10 mt-3 block w-full rounded-md border-black sm:text-sm">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-span-12 sm:col-span-1  md:mr-3 ">
                      <label htmlFor="first-name" className="block text-base text-white text-white font-bold">
                        Infant
                      </label>
                      {/* <input
                        type="number"
                        name="infant"
                        id="infant"
                        autoComplete="given-name"
                        className="dateInput h-10 mt-1 block w-full rounded-md border-black sm:text-sm"
                      /> */}
                      <select name='infant' className="pl-10 h-10 mt-3 block w-full rounded-md border-black sm:text-sm">
                        <option value="0">0</option>
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
                      className="search-button bg-gradient-to-r from-red-900 to-sky-600 hover:bg-gradient-to-r hover:from-sky-900 hover:to-red-700 hover:scale-110 rounded-md focus:outline-none transition ease-out hover:ease-in duration-250 text-white py-2 px-4 rounded absolute">
                      Search
                    </button>
                  </div>
                </div>
                {/* <ImageCards /> */}
              </div>
            </div>
          </form>
        </div>
      </div >

      {/* <SectionOne />

      <Cover />

      <Cards /> */}

    </div >















  );
};

export default Home;
