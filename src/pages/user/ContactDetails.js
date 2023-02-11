import { useSelector } from "react-redux";

const ContactDetails = ({ contactData, getMobileNo, getEmail }) => {

    const user = useSelector((state) => state.user.logged)
    return (
        <div class="rounded-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white">
            <div >
                <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center ">Contact Details</div>
                <form onSubmit={contactData}>
                    <div className="mt-3 ml-4 justify-start flex flex-wrap gap-2">
                        <div>

                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                Mobile Number
                            </label>
                            {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}
                            <input value={user.contactNumber} class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" minLength={10} maxLength={10} type="number" placeholder="Mobile Number..." name="mobileno" onChange={(e) => getMobileNo(e.target.value)} required />
                        </div>
                        <div>

                            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1" htmlFor="grid-zip">
                                Email ID
                            </label>
                            {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}
                            {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Mobile no." name="mobileno" onChange={(e) => setMobileNo(e.target.value)} required /> */}
                            <input value={user.emailId} class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email ID..." name="emailId" onChange={(e) => getEmail(e.target.value)} required />
                        </div>
                    </div>
                    {/* <button className="ml-4 mt-2 text-md
                                    border-2 border-gray-800 py-2 px-4
                                    transition-colors ease-out
                                    duration-500 text-white
                                    bg-blue-800
                                    bg-gradient-to-r
                                    from-blue-800 
                                    rounded-lg
                                    hover:from-white hover:to-gray-300 
                                    hover:text-black hover:border-white uppercase tracking-wide"> Submit </button> */}
                </form>
            </div>

        </div>
    )
}

export default ContactDetails;