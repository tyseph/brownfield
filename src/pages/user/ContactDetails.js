import { useSelector } from "react-redux";
import phoneCountryCode from "../../elements/CountryCode";

const ContactDetails = ({
  contactData,
  getMobileNo,
  getCountryCode,
  getEmail,
  email,
  mobileNo,
  countryCode,
}) => {
  const user = useSelector((state) => state.user.logged);
  return (
    <div class="rounded-lg overflow-hidden p-3 sh   adow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white">
      <div>
        <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center ">
          Contact Details
        </div>
        <form onSubmit={contactData}>
          <div className="mt-3 ml-4 justify-start flex flex-wrap gap-2">
            <div>
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1"
                htmlFor="grid-zip"
              >
                Mobile Number
              </label>
              {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-30 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}

              <div className="flex flex-wrap">
                <select
                  onChange={(e) => getCountryCode(e.target.value)}
                  name="countryCode"
                  onSelect={(e) => getCountryCode(e.target.value)}
                  required
                  value={countryCode}
                  className="col-span-1 shadow appearance-none border-double border-2 w-20 border-gray-900 rounded py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                  id="countryCode"
                  optionLabelProp="value"
                >
                  <option value="" disabled>
                    Code
                  </option>
                  {phoneCountryCode.map((item, index) => {
                    return (
                      <option
                        // defaultValue={}
                        key={index}
                        value={item.code}
                        className="justify-around flex"
                      >
                        {item.code} ({item.name})
                      </option>
                    );
                  })}
                </select>

                <input
                  value={mobileNo}
                  class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  maxLength={10}
                  minLength={10}
                  placeholder="Mobile Number..."
                  name="mobileno"
                  onChange={(e) =>
                    getMobileNo(e.target.value.replace(/[^0-9]/gi, ""))
                  }
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-1"
                htmlFor="grid-zip"
              >
                Email ID
              </label>
              {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-30 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="Firstname" type="text" placeholder="First Name..." name="firstName" onChange={passengerHandler} value={passengers.firstName} required /> */}
              {/* <input class="shadow appearance-none border-double border-2 border-gray-900 rounded w-30 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Mobile no." name="mobileno" onChange={(e) => setMobileNo(e.target.value)} required /> */}
              <input
                value={email}
                class="shadow appearance-none border-double border-2 border-gray-900 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email ID..."
                name="emailId"
                onChange={(e) => getEmail(e.target.value)}
                required
              />
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
  );
};

export default ContactDetails;
