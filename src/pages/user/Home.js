// import React, { useState } from 'react';
// import changeIcon from '../../elements/exchange.png';
// import SearchIcon from '@mui/icons-material/Search';
// import { Input, InputAdornment } from '@mui/material';
// import Person2Icon from '@mui/icons-material/Person2';
// import Cards from './Cards';
// import Navbar from './Navbar';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Select from "react-select";
// import Cover from './Cover';
// import ImageCards from './ImageCards';
// import SectionOne from './SectionOne';
// import '../../styles/Home.css'



// const Home = () => {

//     const [open, setOpen] = useState(false)
//     const [searchBarOn, setSearchBarOn] = useState(false)
//     const [selectedFromCity, setSelectedFromCity] = useState('');
//     const [selectedToCity, setSelectedToCity] = useState('');
//     const [searchByWay, setSearchByWay] = useState({
//         value: ""
//     })
//     const optionList = [
//         { value: "Delhi", label: "Delhi" },
//         { value: "Mumbai", label: "Mumbai" },
//         { value: "Ahemdabad", label: "Ahemdabad" },
//         { value: "Banglore", label: "Banglore" },
//         { value: "Goa", label: "Goa" }
//     ];
//     const handleFromCitySelect = (data) => {
//         setSelectedFromCity(data);
//     }
//     const handleToCitySelect = (data) => {
//         setSelectedToCity(data);
//     }

//     const switchCity = () => {
//         setSelectedToCity(selectedFromCity)
//         setSelectedFromCity(selectedToCity)
//     }
//     // const wayMenu = [
//     //   {
//     //     value: "One Way",
//     //   },
//     //   {
//     //     value: "Round Trip",
//     //   },
//     //   {
//     //     value: "Multi-city",
//     //   }
//     // ]

//     console.log(searchByWay)
//     const searchBarOpen = () => {
//         setSearchBarOn(true)
//     }
//     return (
//         <div>
//             <Navbar />

//             <div className='homePage'>
//                 <div className="mt-0 md:col-span-2 md:mt-0 md:pt-2 md:pb-24 md:ml-20 md:mr-20 ml-6 mr-6" >
//                     <form>
//                         <div className="sm:rounded-md rounded-md pt-10 pb-10">
//                             <div className='flightSearchBox'>
//                                 {/* <pre className='tag'>
//                   {`Where Would You like to go?`}</pre> */}
//                                 <img className='flightImage' src="https://www.freepnglogos.com/uploads/plane-png/plane-png-flights-airlines-msp-airport-1.png" height="80px" data-aos="fade-right" />
//                                 <div className="flightsearch px-4 py-5 sm:p-6 ">
//                                     <div className="grid grid-cols-12 gap-3">
//                                         <div className="col-span-12 sm:col-span-12 md:mr-3 ">
//                                             <FormControl>
//                                                 <RadioGroup
//                                                     row
//                                                     aria-labelledby="demo-row-radio-buttons-group-label"
//                                                     name="row-radio-buttons-group"
//                                                     defaultValue="ONEWAY">
//                                                     <FormControlLabel value="ONEWAY" control={<Radio />} label={<span className='radioText' style={{ fontSize: '14px' }}>{"ONEWAY"}</span>} />
//                                                     <FormControlLabel value="ROUND TRIP" control={<Radio />} label={<span className='radioText' style={{ fontSize: '14px' }}>{"ROUND TRIP"}</span>} />
//                                                     <FormControlLabel value="MULTI CITY" control={<Radio />} label={<span className='radioText' style={{ fontSize: '14px' }}>{"MULTI CITY"}</span>} />
//                                                 </RadioGroup>
//                                             </FormControl>
//                                         </div>
//                                     </div>
//                                     <div class="container mx-auto">
//                                         <div class="grid grid-cols-5 divide-x overflow-scroll">
//                                             <div
//                                                 class="flex justify-center p-6 text-6xl bg-slate-50 rounded-l-lg relative col-span-5 sm:col-span-1 sm:text-center text-center "
//                                                 onClickCapture={searchBarOpen} >
//                                                 <label className=" labels absolute text-left text-base text-zinc-500 font-bold left-4 top-1 ">
//                                                     From
//                                                 </label>
//                                                 <div className="dropdown-container text-base">
//                                                     <Select menuPosition="fixed"
//                                                         className="basic-single selectbar"
//                                                         classNamePrefix="select"
//                                                         options={optionList}
//                                                         placeholder="Select City"
//                                                         value={selectedFromCity}
//                                                         onChange={handleFromCitySelect}
//                                                         isSearchable={true} />
//                                                 </div>
//                                             </div>
//                                             <div
//                                                 class="flex justify-center col-span-5 sm:col-span-1 p-6 text-6xl bg-slate-50 relative">
//                                                 <img className='changeIcon' src={changeIcon} onClick={switchCity} />
//                                                 <label className="labels absolute text-left text-base text-zinc-500 font-bold left-4 top-1">
//                                                     To
//                                                 </label>
//                                                 <div className="dropdown-container text-base ">
//                                                     <Select menuPosition="fixed"
//                                                         className="basic-single selectbar"
//                                                         classNamePrefix="select"
//                                                         options={optionList}
//                                                         placeholder="Select City"
//                                                         value={selectedToCity}
//                                                         onChange={handleToCitySelect}
//                                                         isSearchable={true} />
//                                                 </div>
//                                             </div>
//                                             <div
//                                                 class="flex justify-center col-span-5 sm:col-span-1 p-6 text-6xl bg-slate-50  relative">
//                                                 <label className="labels absolute text-left text-base text-zinc-500 font-bold left-4 top-1">
//                                                     Departure
//                                                 </label>
//                                                 <Input type='date' />
//                                             </div>
//                                             <div
//                                                 class="flex justify-center col-span-5 sm:col-span-1 p-6 text-6xl bg-slate-50  relative">
//                                                 <label className="labels absolute text-left text-base text-zinc-500 font-bold left-4 top-1">
//                                                     Return
//                                                 </label>
//                                                 <Input type='date' />
//                                             </div>
//                                             <div
//                                                 class="flex justify-center col-span-5 sm:col-span-1 p-6 text-6xl bg-slate-50 rounded-r-lg relative ">
//                                                 <label className="labels absolute text-left text-base text-zinc-500 font-bold left-4 top-1">
//                                                     Passengers
//                                                 </label>
//                                                 <Input type='number' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='search-button mt-2'>
//                                         <button
//                                             type="submit"
//                                             className="search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute">
//                                             Search
//                                         </button>
//                                     </div>
//                                 </div>
//                                 {/* <div className='search-button mt-2'>
//                   <button
//                     type="submit"
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Search
//                   </button>
//                 </div> */}
//                                 <ImageCards />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div >
//             <br />
//             <br />
//             <br />
//             <SectionOne />
//             <br />
//             <br />
//             <br />
//             <Cover />
//             <br />
//             <br />
//             <br />
//             <Cards />

//         </div >















//     );
// };

// export default Home;
