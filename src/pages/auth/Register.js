import { Link } from "react-router-dom";

// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// import TextField from '@mui/material/TextField';
import { useState } from "react";

const Register = () => {
  return (
    <>
      <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
          <img className="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/10708763/pexels-photo-10708763.jpeg" />
          <div className="absolute inline-block p-4 min-w-full text-white text-4xl lg:text-6xl mt-20 ml-20 bg-gray-600 bg-opacity-50">
            <h1>Planes to take you everywhere</h1>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 min-h-screen w-full">
          <div className="w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <a className="flex justify-center font-bold text-4xl"> <img className="w-20 h-20" src={require('../../elements/brownfieldlogo.png')} /> </a>

              <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">Create a new account</h2>

              <p className="mt-2 text-sm text-center leading-5 max-w">
                Or
                <Link to={{ pathname: '/login' }}>
                  <a className="font-medium transition ease-in-out duration-150"> Login to your account </a>
                </Link>

              </p>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <form>
                <div className="flex items-left justify-between mt-6">
                  <div className="mb-3">
                    <label htmlFor="first" className="block text-sm font-medium leading-5"> First Name </label>

                    <div className="rounded-md shadow-sm">
                      <input id="first" name="first" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="last" className="block text-sm font-medium leading-5"> Last Name </label>

                    <div className="rounded-md shadow-sm">
                      <input id="last" name="last" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-5"> Email address </label>

                  <div className="rounded-md shadow-sm">
                    <input id="email" name="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="block text-sm font-medium leading-5"> Phone Number </label>

                  <div className="rounded-md shadow-sm">
                    <input id="phone" name="phone" type="number" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 leading-5"> Password </label>

                  <div className="rounded-md shadow-sm">
                    <input id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 leading-5">Confirm Password </label>

                  <div className="rounded-md shadow-sm">
                    <input id="confirm" type="confirm" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                    <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none transition duration-150 ease-in-out">Register</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Register;