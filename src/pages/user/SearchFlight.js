import React from "react";

const SearchFlight = ({airport, placeholder,name ,onChange}) => {
    return (
        <div className="relative inline-block mt-4 xl:mt-0 md:mt-0 lg:mt-0 sxl:mt-0 text-left text-white ">
            <select onChange={onChange} name={name} defaultValue="" placeholder="Select time" className="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-white font-bold bg-gray-900" id="grid-state" >
                <option>{placeholder}</option>
                {
                    airport.map((item) => {
                        return (
                            <option value={item.code} key={item.code} className="cursor-pointer rounded-lg text-white font-semibold block px-4 py-2 text-md">{item.value}</option>
                        )
                    })
                }
            </select>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 111.828 5.757 6.586 4.343 8z" /></svg>
            </div> */}
        </div>
    )
}

export default SearchFlight;