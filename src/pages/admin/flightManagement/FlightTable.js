import { useState } from "react";
import FlightData from "./FlightData";
import SearchByText from "./SearchByText";
import SearchByTime from "./SearchByTime";
import SearchIcon from "@mui/icons-material/Search";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AllAirports from "./AllAirports";
import UpdateFlight from "./UpdateFlight";
// import src from 'react-select/dist/declarations/src';

const FlightTable = ({
  flights,
  searchFlight,
  updateFlightData,
  airPorts,
  clear,
  toggleFlightStatus,
}) => {
  const [update, setUpdate] = useState({
    flightId: "",
    sourceCode: "",
    destinationCode: "",
    timeOfDeparture: "",
    timeOfArrival: "",
    state: false,
  });

  const [input, setInput] = useState({
    flightId: undefined,
    time: "",
    src: "",
    des: "",
  });

  const menuItems = [
    {
      value: "Morning",
      code: "morningFlights",
    },
    {
      value: "Afternoon",
      code: "afternoonFlights",
    },
    {
      value: "Night",
      code: "nightFlights",
    },
  ];

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // console.log(input)
    searchFlight(input);
  };

  const changeUpdate = (
    id,
    sourceCode,
    destinationCode,
    timeOfDeparture,
    timeOfArrival,
    flightStatus,
    state
  ) => {
    // console.log(id)
    setUpdate({
      flightId: id,
      sourceCode: sourceCode,
      destinationCode: destinationCode,
      timeOfDeparture: timeOfDeparture,
      timeOfArrival: timeOfArrival,
      flightStatus: flightStatus,
      state: state,
    });
  };

  return (
    <div className="p-2 mt-6">
      {update.state ? (
        <UpdateFlight
          clear={clear}
          update={update}
          changeUpdate={changeUpdate}
          airPorts={airPorts}
          updateFlightData={updateFlightData}
        />
      ) : (
        <div className="">
          <div className="flex flex-wrap justify-start gap-2">
            <div className="flex flex-wrap gap-2">
              <SearchByText
                name="flightId"
                value={input.flightId}
                onChange={handleOnChange}
                gap="pl-4"
                placeholderText="F-BF-"
              />
              <SearchByTime
                name="time"
                value={input.time}
                onChange={handleOnChange}
                menuItems={menuItems}
                placeholder="Select Time..."
              />
            </div>
            <div className="flex flex-wrap gap-1">
              <AllAirports
                name="src"
                value={input.src}
                gap="inline-flex px-2 py-2 pr-2 block focus:outline-none w-48 rounded-md text-zinc-500 font-bold bg-gray-900"
                onChange={handleOnChange}
                menuItems={airPorts}
                placeholder="Source Code..."
              />
              <SwapHorizIcon className="mt-4 sm:max-md:mt-4 md:max-lg:mt-2 lg:max-xl:mt-2 xl:max-2xl:mt-2 2xl:mt-2" />
              <AllAirports
                name="des"
                value={input.des}
                gap="inline-flex px-2 py-2 pr-2 block focus:outline-none w-48 rounded-md text-zinc-500 font-bold bg-gray-900"
                onChange={handleOnChange}
                menuItems={airPorts}
                placeholder="Destination Code..."
              />
              {/* <SearchIcon className="hover:scale-110 w-4 h-4 search-icon mt-9 sm:max-md:mt-8 md:max-lg:mt-5 lg:max-xl:mt-5 xl:max-2xl:mt-5 2xl:mt-5" /> */}
            </div>
            <div className="flex flex-nowrap">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="text-lg
            border-2 border-gray-100 py-1 px-4
            transition-colors ease-out
            duration-500 text-white
            bg-blue-900
            bg-gradient-to-r
            from-blue-900 
            rounded-lg
            hover:from-gray-900 hover:to-gray-900 
            hover:text-white hover:border-gray-900"
                >
                  Search
                </button>
              </span>
            </div>
            {/* <div className='flex flex-nowrap gap-1'>
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={() => clear()} type="submit" className="text-lg
            border-2 border-gray-100 py-2 px-4
            transition-colors ease-out
            duration-500 text-white
            bg-blue-900
            bg-gradient-to-r
            from-blue-900 
            rounded-lg
            hover:from-gray-900 hover:to-gray-900 
            hover:text-white hover:border-gray-900">Get All</button>
                            </span>
                        </div> */}
            <div className="flex flex-nowrap gap-1">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={() =>
                    setInput({
                      flightId: undefined,
                      time: "",
                      src: "",
                      des: "",
                    })
                  }
                  className="text-lg
            border-2 border-gray-100 py-1 px-4
            transition-colors ease-out
            duration-500 text-white
            bg-blue-900
            bg-gradient-to-r
            from-blue-900 
            rounded-lg
            hover:from-gray-900 hover:to-gray-900 
            hover:text-white hover:border-gray-900"
                >
                  Clear
                </button>
              </span>
            </div>
          </div>

          <div className="py-4 overflow-auto">
            <div className="container mx-auto shadow-md rounded-lg overflow-auto">
              <table className="w-full">
                <thead className="w-full">
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Flight ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Departure
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Arrival
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Distance
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                      Edit
                    </th>
                  </tr>
                </thead>
                <FlightData
                  update={changeUpdate}
                  toggleFlightStatus={toggleFlightStatus}
                  flights={flights}
                />
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightTable;
