import { useState } from "react";

const SearchByTime = ({ menuItems, placeholder, name, value, onChange }) => {
  return (
    // <div className="relative ">
    <div className="w-48 sm:w-48 mt-4 sm:mt-0 relative">
      <select
        value={value}
        onChange={onChange}
        onSelect={onChange}
        name={name}
        className="inline-flex px-2 w-48 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900"
        id="grid-state"
      >
        <option value="">{placeholder}</option>
        {menuItems.map((item) => {
          return (
            <option
              value={item.value}
              key={item.code}
              className="cursor-pointer rounded-lg hover:bg-zinc-200 text-gray-100 hover:font-black font-semibold hover:text-zinc-700 block px-4 py-2 text-md"
            >
              {item.value}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-900">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 20 20">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg> */}
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
        </svg>
      </div>
    </div>
    // </div>
    // <div className="relative inline-block mt-4 xl:mt-0 md:mt-0 lg:mt-0 sxl:mt-0 text-left">
    //     <button type="button" placeholder='Search By time....' onClick={() => setOpen(!open)} className="inline-flex px-2 w-36 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900">
    //         {searchByTime.value !== "" ? searchByTime.value : "Options"}
    //         < svg className="absolute right-2 mt-0.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#71717a" aria-hidden="true">
    //             <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    //         </svg>
    //     </button>
    //     {open ?
    //         <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-lg bg-zinc-500 shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    //             <div className="" role="none">
    //                 {
    //                     menuItems.map((item, index) => {
    //                         return (
    //                             <a className="cursor-pointer rounded-lg hover:bg-zinc-200 text-gray-900 hover:font-black font-semibold hover:text-zinc-900 block px-4 py-2 text-sm" onClick={() => {
    //                                 setSearchByTime({
    //                                     code: item.code,
    //                                     value: item.value
    //                                 });
    //                                 setOpen(!open)
    //                             }
    //                             }>{item.value}</a>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div> : null
    //     }
    // </div>
  );
};

export default SearchByTime;
