import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { getUser } from "../../api/UserDetailsService";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BookingTable from "../admin/bookingManagement/BookingTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllAiriports } from "../../api/FlightManagementService";
import { GetAllAirports } from "../../redux/admin/adminActions";
import { GetAllBookings } from "../../redux/admin/adminActions";
import { updateUser } from "../../api/UserDetailsService";
import {
  getAllBookings,
  getAllBookingsByUserId,
  getBookingsByDate,
  getAllUsers,
  getByAdminSearch,
  postCheckIn,
} from "../../api/BookingManagementService";
import BookingData from "../admin/bookingManagement/BookingData";
import { getLoggedUser } from "../../redux/user/userActions";

const Profile = () => {
  const [tasksCompleted, setTasksCompleted] = useState();
  const [disabled, setDisabled] = useState(true);

  const [airPorts, setAirPorts] = useState(
    useSelector((state) => state.admin.airports)
    // []
  );

  //   console.log(useSelector((state) => state.admin.airports));

  const [bookings, setBookings] = useState([]);

  const [trueUser, setTrueUser] = useState(
    useSelector((state) => state.user.logged)
  );
  const [users, setUsers] = useState(trueUser);
  console.log(useSelector((state) => state.user.logged));

  const [clear, setClear] = useState(false);
  const [totalBookings, setTotalBooking] = useState();

  console.log(bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const view = (x, y) => {
    navigate("/pdf");
  };

  // useEffect(() => {
  //   setUsers(trueUser);
  // }, [trueUser]);

  const [checkIn, setCheckIn] = useState(false);

  const handleCheckIn = (
    bookingId,
    dateOfTravelling,
    timeOfDeparture,
    check1
  ) => {
    console.log(bookingId, dateOfTravelling, timeOfDeparture);
    let travel = new Date(`${dateOfTravelling} ${timeOfDeparture}`).getTime();
    let now = new Date().getTime();
    let yesterday = travel - 8.64e7;
    // let check1 = travel > now;
    // console.log(travel, now, yesterday);
    if (check1 && travel > now && yesterday < now) {
      return;
    }
    if (travel > now && yesterday < now) {
      // console.log(true);
      postCheckIn(bookingId).then((res) => {
        console.log(res.data);
        toast.success("Checked In Successfully!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setCheckIn(true);
      });
    } else {
      toast.error("Cannot Check In Now!", {
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
  };

  useEffect(() => {
    console.log("SAJAL ", users.userId);
    getAllBookingsByUserId(users.userId).then((res) => {
      if (res.status === 200) {
        setBookings(
          res.data.sort(
            (
              { dateOfTravelling: a, flight: { departureTime: b } },
              { dateOfTravelling: c, flight: { departureTime: d } }
            ) =>
              new Date(`${c} ${d}`).getTime() - new Date(`${a} ${b}`).getTime()
          )
        );
        setTotalBooking(res.data.length);
        console.log("inside get all users", res.data);
        dispatch(
          GetAllBookings(
            res.data.sort(
              (
                { dateOfTravelling: a, flight: { departureTime: b } },
                { dateOfTravelling: c, flight: { departureTime: d } }
              ) =>
                new Date(`${c} ${d}`).getTime() -
                new Date(`${a} ${b}`).getTime()
            )
          )
        );
        setTasksCompleted(res.data.length);
      } else {
        console.log("could not get data");
      }
    });

    console.log("CAlled", users);
  }, [checkIn]);

  const handleEdit = () => {
    setDisabled(false);
    console.log("cllicked edit", disabled);
  };

  const handleChange = (e) => {
    e.persist();
    setUsers((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setUsers(trueUser);
    setDisabled(true);
    console.log("clicked calcel", disabled);
  };

  const handleUpdate = () => {
    console.log(users !== trueUser);
    if (users !== trueUser) {
      updateUser(users)
        .then((res) => {
          if (res.status === 200) {
            dispatch(getLoggedUser(res.data));
            setTrueUser(res.data);
            setUsers(res.data);
            setDisabled(true);
            toast.success("Successfully updated", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            console.log("error while updating", res.status);
            toast.error("Failed to update", {
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
        })
        .catch((err) => {
          setUsers(trueUser);
          console.log("error in updating", err);
          toast.error("Failed to update", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      // setDisabled(true);
    } else {
      toast.error("No Data Changed", {
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
  };

  // const adminSearch = (obj) => {
  //   // console.log('inside adminSearch', obj)
  //   getByAdminSearch(obj).then((res) => {
  //     // console.log('this is the resp from booking', res.data)
  //     setBookings(res.data.sort(({ bookingId: a }, { bookingId: b }) => a - b));
  //   });
  // };

  return (
    <div className="p-5">
      <div>
        <div className="mx-auto my-5 p-2">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full sm:w-4/13 md:w-4/13 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="bg-white p-5 w-full rounded-lg bg-gray-900">
                {/* <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="" />
                    </div> */}
                <h1 className="text-gray-200 font-bold text-4xl leading-8 my-1 py-4">
                  {users.firstName} {users.lastName}
                </h1>
                {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">Tier 1 customer</h3> */}
                {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p> */}
                <ul
                  id="profDetails"
                  className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
                >
                  {/* <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li> */}
                  {/* <li className="flex items-center py-3">
                            <span>Times Airborne</span>
                            <span className="ml-auto">Nov 07, 2016</span>
                        </li> */}
                  <li className="space-y-1 flex flex-nowrap justify-around">
                    <span className=" sm:inline-block align-middle font-extrabold w-32">
                      Email
                    </span>
                    {/* <input className="ml-auto"> value = {users.emailId} /> */}
                    <input
                      id="listItem"
                      className={`sm:inline-block ${
                        true ? "bg-gray-700" : "bg-gray-900"
                      } focus:outline-none text-md text-gray-100 w-44 rounded-md py-1.5 px-2`}
                      name="emailId"
                      type="email"
                      value={users.emailId}
                      required
                      disabled
                      onChange={handleChange}
                    />
                  </li>
                  <li className="space-y-1 flex flex-nowrap justify-around">
                    <span className=" sm:inline-block align-middle font-extrabold w-32">
                      Contact no.
                    </span>
                    <input
                      id="listItem"
                      className={`sm:inline-block ${
                        disabled ? "bg-gray-700" : "bg-gray-900"
                      } focus:outline-none text-md text-gray-100 w-44 rounded-md py-1.5 px-2`}
                      name="contactNumber"
                      type="tel"
                      value={users.contactNumber}
                      required
                      disabled={disabled}
                      onChange={handleChange}
                    />
                    {/* <span className="ml-auto">{users.contactNumber}</span> */}
                  </li>
                  <li className="space-y-1 flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap justify-around">
                    <span className=" sm:inline-block align-middle font-extrabold w-32">
                      Gender
                    </span>
                    {/* <input id="listItem" name="gender" type="email" value = {users.emailId} required className="ml-auto" disabled = {disabled}/> */}
                    <select
                      name="gender"
                      required
                      value={users.gender}
                      className={`sm:inline-block  ${
                        disabled ? "bg-gray-900" : "bg-gray-900"
                      } focus:outline-none text-md text-gray-100 w-44 rounded-md py-1.5 px-2`}
                      id="listItem"
                      disabled={disabled}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option>MALE</option>
                      <option>FEMALE</option>
                      <option>OTHER</option>
                    </select>
                    {/* <span className="ml-auto">{users.gender}</span> */}
                  </li>
                  <li className="space-y-1 flex flex-nowrap justify-around">
                    <span className=" sm:inline-block align-middle font-extrabold w-32">
                      Date of birth
                    </span>
                    <input
                      id="dob"
                      name="dateOfBirth"
                      type="date"
                      max="2015-12-12"
                      style={{ colorScheme: "dark", color: "f3f4f6" }}
                      value={users.dateOfBirth}
                      required
                      className={`sm:inline-block ${
                        disabled ? "bg-gray-700" : "bg-gray-900"
                      } focus:outline-none text-md text-gray-100 w-44 rounded-md py-1.5 px-2`}
                      disabled={disabled}
                      onChange={handleChange}
                    />
                    {/* <span className="ml-auto">{users.dateOfBirth}</span> */}
                  </li>
                  <li className="space-y-1 flex flex-nowrap justify-around">
                    <span className=" sm:inline-block align-middle font-extrabold w-32">
                      Total Bookings
                    </span>
                    <span
                      className={`sm:inline-block ${
                        true ? "bg-gray-700" : "bg-gray-900"
                      } focus:outline-none text-md text-gray-100 w-44 rounded-md py-1.5 px-2`}
                    >
                      {totalBookings}
                    </span>
                  </li>
                </ul>
                {disabled == true ? (
                  <li className="flex flex-wrap justify-around mt-5">
                    <span className="block rounded-md shadow-sm justify-center">
                      <button
                        onClick={handleEdit}
                        className="w-40 text-md
          border-2 border-gray-800 py-2 px-4
          transition-colors ease-out
          duration-500 text-white
          bg-blue-800
          bg-gradient-to-r
          from-blue-800 
          rounded-lg
          hover:from-white hover:to-gray-300 
          hover:text-black hover:border-white"
                      >
                        Edit
                      </button>
                    </span>
                  </li>
                ) : (
                  <li className="flex flex-wrap justify-around mt-5">
                    <span className="block rounded-md shadow-sm justify-around">
                      <button
                        onClick={handleUpdate}
                        className="w-40 border-2 border-gray-800 py-2 px-8
                          transition-colors ease-out
                          duration-500 text-white
                          bg-blue-800
                          bg-gradient-to-r
                          from-blue-800 
                          rounded-lg
                          hover:from-white hover:to-gray-300 
                          hover:text-black hover:border-white"
                      >
                        Update
                      </button>
                    </span>
                    <span>
                      <button
                        onClick={handleCancel}
                        className="w-40 border-2 border-gray-800 py-2 px-8
                          transition-colors ease-out
                          duration-500 text-white
                          bg-red-800
                          bg-gradient-to-r
                          from-red-800 
                          rounded-lg
                          hover:from-white hover:to-white 
                          hover:text-black hover:border-white"
                      >
                        Cancel
                      </button>
                    </span>
                  </li>
                )}
              </div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/13 sm:9/13 p-4 bg-gray-900 rounded-lg">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                {/* <span clas="text-green-500">
                            <svg className="h-8 px-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span> */}
                <span className="text-gray-100 font-bold text-4xl leading-8 my-1 py-4">
                  Booking History
                </span>
              </div>
              <div className="shadow-sm rounded-sm ">
                <div className="py-4 overflow-auto">
                  <div className="w-full shadow-md h-96 overflow-auto">
                    <table className="w-full">
                      <thead className="w-full">
                        <tr>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Booking ID
                          </th>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Travelling date
                          </th>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Source
                          </th>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Destination
                          </th>
                          {/* <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Departure
                          </th>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            Arrival
                          </th> */}
                          {/* <th
                                        className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                                    >
                                        Fare
                                    </th> */}
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            View
                          </th>
                          <th className="font-extrabold px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                            checkin
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, index) => {
                          return (
                            <tr key={booking.bookingId}>
                              <td
                                className={`px-5 w-42 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.bookingId}
                                </p>
                                {/* <p className="text-gray-400 text-xs whitespace-no-wrap">USD</p> */}
                              </td>
                              <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {new Date(
                                    booking.dateOfTravelling
                                  ).toLocaleDateString("en-IN", {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit",
                                  })}
                                </p>
                              </td>
                              <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.source.code}
                                </p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap text-wrap w-40">
                                  {booking.flight.source.name}
                                </p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap">
                                  {booking.flight.source.city}
                                </p>
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.departureTime}
                                </p>
                              </td>
                              {/* <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.departureTime}
                                </p>
                              </td> */}
                              <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.destination.code}
                                </p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap text-wrap w-40">
                                  {booking.flight.destination.name}
                                </p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap">
                                  {booking.flight.destination.city}
                                </p>
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.arrivalTime}
                                </p>
                              </td>

                              {/* <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {booking.flight.arrivalTime}
                                </p>
                              </td> */}
                              {/* <td className={`px-5 py-5 bg-white text-sm ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                                <p className="text-gray-900 whitespace-no-wrap">{booking.destination.code}</p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap">{booking.destination.name}</p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap">{booking.destination.city}</p>

                            </td> */}
                              {/* <td className={`px-5 py-5 bg-white text-sm ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                            <p className="text-gray-400 text-xs whitespace-no-wrap">$</p>
                                <p className="text-gray-900 whitespace-no-wrap">{booking.fare}</p>
                            </td> */}
                              {/* <td className={`px-5 py-5 bg-white text-sm ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}>
                                <p className="text-gray-900 whitespace-no-wrap">₹8894</p>
                                <p className="text-gray-400 text-xs whitespace-no-wrap"></p>
                            </td> */}
                              <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <span className="relative inline-block cursor-pointer font-semibold text-red-900 leading-tight hover:scale-110 transform transition duration-200">
                                  {/* <span
                                        aria-hidden
                                        className="inset-0 "
                                    ></span> */}
                                  <span
                                    onClick={() =>
                                      view(booking.bookingId, true)
                                    }
                                    className="px-2 py-1 bg-red-200 hover:bg-red-500 hover:text-white transform transition duration-200 rounded-xl"
                                  >
                                    View
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`px-5 py-5 bg-white text-sm ${
                                  index % 2 === 0
                                    ? "bg-gray-200"
                                    : "bg-gray-100"
                                }`}
                              >
                                <span
                                  className={`relative inline-block w-36 cursor-pointer font-semibold ${
                                    booking.checkedIn
                                      ? "text-green-900"
                                      : `${
                                          new Date(
                                            `${booking.dateOfTravelling} ${booking.flight.departureTime}`
                                          ).getTime() -
                                            new Date().getTime() <
                                          8.64e7
                                            ? "text-red-900"
                                            : "text-yellow-900 hover:scale-110 transform transition duration-200"
                                        }`
                                  }  leading-tight`}
                                >
                                  {/* <span
                                        aria-hidden
                                        className="inset-0 "
                                    ></span> */}
                                  <span
                                    className={`px-2 py-1 ${
                                      booking.checkedIn
                                        ? "bg-green-500 text-white"
                                        : `${
                                            new Date(
                                              `${booking.dateOfTravelling} ${booking.flight.departureTime}`
                                            ).getTime() -
                                              new Date().getTime() <
                                            8.64e7
                                              ? "bg-red-500 text-white"
                                              : "hover:bg-yellow-500 bg-yellow-200 hover:text-white transform transition duration-200"
                                          }`
                                    }  rounded-xl`}
                                    onClick={() =>
                                      handleCheckIn(
                                        booking.bookingId,
                                        booking.dateOfTravelling,
                                        booking.flight.departureTime,
                                        booking.checkedIn
                                      )
                                    }
                                  >
                                    {booking.checkedIn
                                      ? "Checked In"
                                      : `${
                                          new Date(
                                            `${booking.dateOfTravelling} ${booking.flight.departureTime}`
                                          ).getTime() -
                                            new Date().getTime() <
                                          8.64e7
                                            ? "Failed"
                                            : "CheckIn Now"
                                        }`}
                                  </span>
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <button
                        className="block w-full text-red-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Edit Information</button> */}
              </div>
              {/* <!-- End of about section --> */}

              {/* <div className="my-4"></div> */}

              {/* <!-- Experience and education --> */}

              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
