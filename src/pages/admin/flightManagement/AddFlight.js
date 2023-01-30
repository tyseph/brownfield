import { useEffect, useState } from "react";
import AllAirports from "./AllAirports";
import { toast } from "react-toastify";


const AddFlight = ({ airPorts, insertFlightData }) => {

    const [addFlight, setAddFlight] = useState({
        sourceCode: "",
        destinationCode: "",
        timeOfDeparture: "12:00",
        timeOfArrival: "14:00"
    })

    const handleOnChange = (e) => {
        e.preventDefault()
        setAddFlight({
            ...addFlight,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (addFlight.sourceCode !== "" && addFlight.destinationCode !== "" && addFlight.destinationCode !== addFlight.sourceCode) {
            insertFlightData(addFlight)
            setAddFlight({
                sourceCode: "",
                destinationCode: "",
                timeOfDeparture: "12:00",
                timeOfArrival: "14:00"
            })
        }
        else {
            toast.error('Please Enter Correct Details', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }



    return (
        <div className="w-full mt-6">

            <form className="w-full bg-gray-900 p-8 rounded-lg">
                <label className="block uppercase text-center tracking-wide text-gray-100 text-2xl font-bold mb-6" htmlFor="grid-zip">
                    Enter Flight data
                </label>
                <div className="flex flex-wrap justify-center mb-6 gap-9">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Source Airport Code
                            </label>
                            <select name="sourceCode" id="source" onChange={handleOnChange} onSelect={handleOnChange} required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                <option selected disabled>Source code...</option>
                                {
                                    airPorts.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code}>{item.code}{":  "}{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {/* <AllAirports name="sourceCode" value={addFlight.sourceCode} gap="pl-12" onChange={handleOnChange} menuItems={airPorts} placeholder="Source Code..." /> */}
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Destination Airport Code
                            </label>
                            <select name="destinationCode" id="destination" onChange={handleOnChange} onSelect={handleOnChange} required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option selected disabled>Destination code...</option>
                                {
                                    airPorts.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code}>{item.code}{":  "}{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 mt-4 right-0 flex items-center px-2 text-zinc-900">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                </div>
                {/* <div className="flex flex-wrap text-center p-2 mx-6 mb-6">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataSource.name}
                            </label>
                            <p className="text-gray-100 text-xs italic">{dataSource.city}{", "}{dataSource.state}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-lg font-bold" htmlFor="grid-zip">
                                1820
                            </label>
                            <p className="text-gray-100 text-xs italic">KM</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xl font-bold" htmlFor="grid-zip">
                                {dataDestination.name}
                            </label>
                            <p className="text-gray-100 text-xs italic">{dataDestination.city}{", "}{dataDestination.state}</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-wrap justify-center mb-6 gap-9">

                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Departure Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input value={addFlight.timeOfDeparture} onChange={handleOnChange} name="timeOfDeparture" type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 md:mb-0">
                        <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Arrival Time
                            </label>
                            <div className="rounded-md shadow-sm">
                                <input value={addFlight.timeOfArrival} onChange={handleOnChange} name="timeOfArrival" type="time" required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-zinc-900 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <center className="justify-center align-center">
                    <span className="block rounded-md shadow-sm">
                        <button onClick={handleClick} className="w-40 text-md
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white uppercase tracking-wide">Add</button>
                    </span>
                </center>
            </form >
        </div >
    )
}

export default AddFlight;


// import * as React from 'react';

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// export default function BasicTimePicker() {
//   const [value, setValue] = React.useState(null);

//   return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <TimePicker
    //     label="Basic example"
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </LocalizationProvider>
//   );
// }
