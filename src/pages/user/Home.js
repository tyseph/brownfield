import React, { useState } from 'react';
import changeIcon from '../../elements/exchange.png';
import SearchIcon from '@mui/icons-material/Search';
import { Input, InputAdornment } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';


const Home = () => {

  const [open, setOpen] = useState(false)
  const [searchByTime, setSearchByTime] = useState({
    code: "",
    value: ""
  })
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
    // <div className="px-4 py-3 ">
    //   <div className="mt-5 md:col-span-3 md:mt-10 ml-20 mr-20">
    //     <form action="#" method="POST" className="bg-gray-50">
    //       <div className="overflow-hidden shadow sm:rounded-md">
    //         <div className="bg-black px-4 py-5 sm:p-6 form">
    //           <div className="grid grid-cols-8 gap-1">
    //             <div class=" relative col-span-3 sm:col-span-3">
    //               <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="From" />
    //               <div class="absolute top-4 right-3">
    //                 <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
    //               </div>
    //             </div>
    //             <div className=" relative col-span-2 sm:col-span-2">
    //                 <img className='changeIcon' src={changeIcon} height={'100px'}/>
    //             </div>
    //             <div class=" relative col-span-3 sm:col-span-3">
    //               <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="To" />
    //               <div class="absolute top-4 right-3">
    //                 <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
    //               </div>
    //             </div>

    //           </div>
    //           </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>



    <div className='homePage'>

      {/* <Navbar /> */}




      <div className="mt-5 md:col-span-2 md:mt-10 md:ml-20 md:mr-20" >
        <form action="#" method="POST" >
          <div className="overflow-hidden shadow sm:rounded-md">
































            {/* <div className="flightsearch px-4 py-5 sm:p-6">
              <div className="grid grid-cols-10 gap-10">
                <div className="col-span-2 sm:col-span-2">

                  <div className="relative inline-block ">

                    <button type="button" placeholder='Search By time....' onClick={() => setOpen(!open)} className="inline-flex px-2 w-56 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900">
                      {searchByTime.value !== "" ? searchByTime.value : "Way"}
                      <svg className="absolute right-2 mt-0.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#71717a" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {open ?
                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-zinc-500 shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                          {
                            menuItems.map((item, index) => {
                              return (
                                <a className="cursor-pointer text-gray-900 hover:font-black font-semibold hover:text-zinc-200 block px-4 py-2 text-sm" onClick={() => {
                                  // setSearchByTime({
                                  //     code: item.code,
                                  //     value: item.value
                                  // });
                                  setOpen(!open)
                                }
                                }>{item.value}</a>)
                            })}
                        </div>

                      </div> : null

                    }

                  </div>



                </div> */}
            {/* <div className="image col-span-1 sm:col-span-1">
                <img className="changeIcon" src={changeIcon} />
              </div> */}

            {/* <div className="col-span-2 sm:col-span-2">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-white">
                    To
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-1 sm:col-span-1">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-white">
                    Date
                  </label>
                  <input
                    type="date"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

              </div>
            </div> */}









            <div className="flightsearch px-4 py-5 sm:p-6">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-10 sm:col-span-3 mr-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 text-white">
                    From
                  </label>

                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className=" inputField h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    startAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }

                  />
                </div>
                <div className="image col-span-10 sm:col-span-1 ">
                  <img className="changeIcon" src={changeIcon} />
                </div>

                <div className="col-span-10 sm:col-span-3  mr-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-white">
                    To
                  </label>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="inputField h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    startAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>

                <div className="col-span-10 sm:col-span-3 mr-3 ">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 text-white">
                    Date
                  </label>
                  <input
                    type="date"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="inputField h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-10 sm:col-span-2 mr-3 ">
                  <label htmlFor="passengernumber" className="block text-sm font-medium text-gray-700 text-white">
                   Passenger
                  </label>
                  <Input
                    type="number"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="inputField h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    startAdornment={
                      <InputAdornment position="end">
                        <Person2Icon />
                      </InputAdornment>
                    }
                       />
                </div>

              </div>
            </div>
            <div className="bg-white px-4 py-3 text-center sm:px-6">
              <button
                type="submit"
                className="inputField search inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Search
              </button>
            </div>





          </div>
        </form>

        <br />
        <br />
        <br />


        {/* Carousel starts */}



        {/* <div class="carousel relative rounded relative overflow-hidden shadow-xl">
          <div class="carousel-inner relative overflow-hidden w-full">
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
              checked="checked" />
            <div class="carousel-item ci-1 absolute opacity-0 bg-center" >

            </div>
            <label for="carousel-3"
              class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                class="fas fa-angle-left mt-3"></i></label>
            <label for="carousel-2"
              class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                class="fas fa-angle-right mt-3"></i></label>


            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
            <div class="carousel-item ci-2 absolute opacity-0 bg-center" >
            </div>
            <label for="carousel-1"
              class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                class="fas fa-angle-left mt-3"></i></label>
            <label for="carousel-3"
              class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                class="fas fa-angle-right mt-3"></i></label>


            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
            <div class="carousel-item ci-3 absolute opacity-0" >
            </div>
            <label for="carousel-2"
              class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                class="fas fa-angle-left mt-3"></i></label>
            <label for="carousel-1"
              class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                class="fas fa-angle-right mt-3"></i></label>


            <ol class="carousel-indicators">
              <li class="inline-block mr-3">
                <label for="carousel-1"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li class="inline-block mr-3">
                <label for="carousel-2"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
              <li class="inline-block mr-3">
                <label for="carousel-3"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
              </li>
            </ol>

          </div>
        </div> */}

        {/* <br />
        <br />
        <br /> */}

        {/* Card Starts */}

        <div>
          <div className='cards flex-wrap justify-center'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg sm:w-80 ">
              <img class="w-full" src="https://www.adanione.com/-/media/Project/Adani/Offers/Offers-Discounts15thDecLive/Flight-Booking-Page-Images/Flight-Page_Flat-Rs1001-Off-Domestic.jpg" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg sm:w-80">
              <img class="w-full" src="https://www.adanione.com/-/media/Project/Adani/Offers/Offers-Discounts15thDecLive/Flight-Booking-Page-Images/Flight-Page_Flat-Rs600off-Domestic--1.jpg" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg sm:w-80">
              <img class="w-full" src="https://www.adanione.com/-/media/Project/Adani/Loyalty/Adani-Rewards-Services/Adani-Rewards-Go-Live/Flight-Page.jpg" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>

        </div>










      </div>








    </div>
















  );
};

export default Home;
