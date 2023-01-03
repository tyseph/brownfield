import { useState } from "react";


const SearchByTime = () => {

    const [searchByTime, setSearchByTime] = useState({
        code: "",
        value: ""
    })

    const [open, setOpen] = useState(false)

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
        <div className="relative inline-block mt-4 xl:mt-0 md:mt-0 lg:mt-0 sxl:mt-0 text-left">
            <button type="button" placeholder='Search By time....' onClick={() => setOpen(!open)} className="inline-flex px-2 w-36 py-2 pr-2 block focus:outline-none w-full rounded-md text-zinc-500 font-bold bg-gray-900">
                {searchByTime.value !== "" ? searchByTime.value : "Options"}
                < svg className="absolute right-2 mt-0.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#71717a" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {open ?
                <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-lg bg-zinc-500 shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="" role="none">
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <a className="cursor-pointer rounded-lg hover:bg-zinc-200 text-gray-900 hover:font-black font-semibold hover:text-zinc-900 block px-4 py-2 text-sm" onClick={() => {
                                        setSearchByTime({
                                            code: item.code,
                                            value: item.value
                                        });
                                        setOpen(!open)
                                    }
                                    }>{item.value}</a>
                                )
                            })
                        }
                    </div>
                </div> : null
            }
        </div>
    )
}

export default SearchByTime;