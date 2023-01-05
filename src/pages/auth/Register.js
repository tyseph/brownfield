import { Link } from "react-router-dom"
import flight from '../../elements/flightRegister.jpg'
import { useState } from "react";
import { signup } from "../../redux/auth/authActions";
import { connect } from "react-redux";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Register = () => {

  const [values, setValues] = useState({
    firstName:"",

    lastName:"",

    emailId:"",

    dateOfBirth:"",

    password:"",

    contactNumber:"",

    gender:""

    });

  const [confirmPassword, setConfirmPassword] = useState("")


    const handleChange = (e) => {
      e.persist();
      setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
      }));
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (confirmPassword === values.password) {
      signup(values)
    } else {
      console.log('password doesnt match')
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (

    <>

      <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">

        <div className="hidden md:block h-50 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">

          <img className="absolute inset-0 h-full w-full object-cover" src={flight}/>

          {/* <div className="absolute inline-block p-4 min-w-full text-white text-4xl lg:text-6xl mt-20 ml-20 bg-gray-600 bg-opacity-50">

            <h1>Planes to take you everywhere</h1>

          </div> */}

        </div>



        <div className="flex items-center justify-center p-6 min-h-screen w-full">

          <div className="w-full">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">

              {/* <a className="flex justify-center font-bold text-4xl">
                  </a> */}
                 <img className="w-20 h-20" src={require('../../elements/brownfieldlogo.png')} />



              <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">Create a new account</h2>



              <p className="mt-2 text-sm text-center leading-5 max-w">

                Or

                <Link to={{ pathname: '/login' }}>

                  <p className="font-medium transition ease-in-out duration-150"> Login to your account </p>

                </Link>



              </p>

            </div>



            <div className="sm:mx-auto sm:w-full sm:max-w-md">

              <form onSubmit={handleSubmit}>

                <div className="flex items-left justify-between mt-6">

                  <div className="mb-3">

                    <label htmlFor="first" className="block text-sm font-medium leading-5"> First Name </label>



                    <div className="rounded-md shadow-sm">

                      <input id="first" name="firstName" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange}/>

                    </div>

                  </div>



                  <div className="mb-3 ml-3">

                    <label htmlFor="last" className="block text-sm font-medium leading-5 ml-1"> Last Name </label>



                    <div className="rounded-md shadow-sm">

                      <input id="last" name="lastName" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange}/>

                    </div>

                  </div>

                </div>



                <div className="mb-3">

                  <label htmlFor="email" className="block text-sm font-medium leading-5"> Email address </label>



                  <div className="rounded-md shadow-sm">

                    <input id="email" name="emailId" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange} />

                  </div>

                </div>



                <div className="mb-3">

                  <label htmlFor="phone" className="block text-sm font-medium leading-5"> Phone Number </label>



                  <div className="rounded-md shadow-sm">

                    <input id="phone" name="contactNumber" type="number" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange} />

                  </div>

                </div>




                <div className="mb-3">

                    <label htmlFor="dob" className="block text-sm font-medium leading-5 ml-1"> DOB </label>



                    <div className="rounded-md shadow-sm">

                      <input id="dob" name="dateOfBirth" type="date" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange}/>

                    </div>

                  </div>

                  {/* <Menu as="div" className="relative inline-block text-left">
                  <label htmlFor="last" className="block text-sm font-medium leading-5 ml-1"> Gender </label>
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Choose
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          
          <div className="py-1">
            
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  MALE
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  FEMALE
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  OTHER
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    DON'T WANT TO MENTION
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu> */}

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
  <label htmlFor="last" className="block text-sm font-medium leading-5 ml-1">Gender</label>
    <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      onChange={handleChange}
      name="gender"
      value={values.gender}
      >
        <option selected>Open this select menu ▼</option>
        <option>MALE</option>
        <option>FEMALE</option>
        <option>OTHER</option>
    </select>
  </div>
</div>




                <div className="mb-3">

                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 leading-5"> Password </label>



                  <div className="rounded-md shadow-sm">

                    <input id="password" type="password" name="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange}/>

                  </div>

                </div>



                <div className="">

                  <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 leading-5">Confirm Password </label>



                  <div className="rounded-md shadow-sm">

                    <input id="confirm" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={onChangeConfirmPassword}/>

                  </div>

                </div>



                <div className="flex items-center justify-between mt-6">

                  <div className="flex items-center">

                    <input id="remember" type="checkbox" className="form-checkbox w-4 h-4 transition duration-150 ease-in-out" />

                    <label htmlFor="remember" className="block ml-2 text-sm text-gray-900 leading-5"> Remember </label>

                  </div>



                  <div className="text-sm leading-5">

                    <p className="font-medium transition ease-in-out duration-150"> Forgot your password? </p>

                  </div>

                </div>



                <div className="mt-6">

                  <span className="block w-full rounded-md shadow-sm">

                  <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-#1F2937-500 focus:outline-none transition duration-150 ease-in-out">Register</button>

                  </span>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>)

}

const mapStateToProps=(state)=>{
  
  return {
      currentUser: state.currentUser
}}


const mapDispatchToProps=(dispatch)=>{

  return {
      signup:(values)=> dispatch(signup(values)),   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);