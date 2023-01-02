import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../../styles/Home.css'
import flight from '../../elements/flight.jpg'
const Login = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
          <img className="absolute inset-0 h-full w-full object-cover" src={flight} />
          {/* <div className="absolute inline-block p-4 min-w-full text-white text-4xl lg:text-6xl mt-20 ml-20 bg-gray-600 bg-opacity-50">
            <h1>Planes to take you everywhere</h1>
          </div> */}
        </div>

        <div className="flex items-center justify-center p-6 min-h-screen w-full">
          <div className="w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <a className="flex justify-center font-bold text-4xl"> <img className="w-20 h-20" src={require('../../elements/brownfieldlogo.png')} /> </a>

              <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">Sign in to your account</h2>

              <p className="mt-2 text-sm text-center leading-5 max-w">
                Or

                <Link to={{ pathname: '/register' }}>
                  <a className="font-medium transition ease-in-out duration-150"> create a new account </a>
                </Link>

              </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-5"> Email address </label>

                  <div className="mt-1 rounded-md shadow-sm">
                    <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 leading-5"> Password </label>

                  <div className="mt-1 rounded-md shadow-sm">
                    <input id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <input id="remember" type="checkbox" className="form-checkbox w-4 h-4 transition duration-150 ease-in-out" />
                    <label htmlFor="remember" className="block ml-2 text-sm text-gray-900 leading-5"> Remember </label>
                  </div>

                  <div className="text-sm leading-5">
                    <a className="font-medium transition ease-in-out duration-150"> Forgot your password? </a>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-#1F2937-500 focus:outline-none transition duration-150 ease-in-out">Login</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Login;