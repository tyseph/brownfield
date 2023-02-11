import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import flight from '../../elements/flight.jpg'
import forgor from '../../elements/flight.jpg'
import { toast } from 'react-toastify'
import Navbar from '../user/Navbar';

const ForgotPassword = () => {
    const [emailId, setEmailId] = useState('')
    const [showSubmit, setShowSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [userOtp, setUserOtp] = useState();
    const [password, setPassword] = useState('')
    const [otp, setOtp] = useState()
    

    const [newPassword, setNewPassword] = useState({
        emailId: '',
        password: ''
    })

    // const newPasswordHandler = (e) => {
    //     e.preventDefault()
    //     setNewPassword({
    //         emailId: emailId,
    //         password: password
    //     })

    //     setTimeout(submitNewPasswordHandler(e), 100)
    // }

    const submitNewPasswordHandler = (e) => {
        e.preventDefault();
        console.log(password + " " + emailId)
        axios.post(`http://LIN59017635:8089/home/updatePassword`, newPassword).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }


    const otpHandler = (e) => {
        e.preventDefault()
        setShowSubmit(true)
        console.log(emailId)
        axios.post(`http://LIN59017635:8089/home/forgot-password?emailId=${emailId}`, emailId).then(res => {
            console.log(res)
            setOtp(res.data)
            toast.success('OTP to reset password sent. Please check your email!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch(err => {
            switch(err.response.status) {
                case 400:
                    toast.error('No such user exists. Please enter a valid email or register first!', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                break;
                default:
            }
            console.log('gg', err.response.data.message)
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(otp + " " + userOtp);
        if (otp == userOtp) {
            console.log("correct");
            toast.success('OTP matched. Please set a new password!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setShowPassword(true)
            setShowSubmit(false)
        }
        else
        toast.error('OTP did not match. Please check your email for an OTP!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            console.log("not correct");
    }

    const handleChange = (e) => {
        e.preventDefault();
        setEmailId(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <>
            
            <div className="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
                    <img className="absolute inset-0 h-full w-full object-cover" src={forgor} />
                </div>
                <div className="flex items-center justify-center p-6 min-h-screen w-full">
                    <div className="w-full">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <a className="flex justify-center font-bold text-4xl"> <img className="w-20 h-20" src={require('../../elements/brownfieldlogo.png')} /> </a>
                            <h2 className="mt-6 text-2xl font-extrabold text-center leading-9">Forgot Password</h2>
                        </div>
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <form onSubmit={otpHandler}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-5" > Email address </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="email" name="username" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <span className="block w-full rounded-md shadow-sm">
                                        <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-#1F2937-500 focus:outline-none transition duration-150 ease-in-out" >Send OTP</button>
                                    </span>
                                </div>
                            </form>

                            <div>
                                {
                                    showSubmit == true && showPassword == false ?
                                        <div>
                                            <form onSubmit={submitHandler}>
                                                <div>
                                                    <label htmlFor="otp" className="block text-sm font-medium leading-5 pt-4" > OTP </label>
                                                    <div className="mt-1 rounded-md shadow-sm">
                                                        <input id="otp" name="otp" type="number" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={(e) => setUserOtp(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    <span className="block w-full rounded-md shadow-sm">
                                                        <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-#1F2937-500 focus:outline-none transition duration-150 ease-in-out">Submit</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        :
                                        showPassword === true ?
                                            <div>
                                                <form onSubmit={submitNewPasswordHandler}>
                                                    <div>
                                                        <label className="block text-sm font-medium leading-5 pt-4" > New Password </label>
                                                        <div className="mt-1 rounded-md shadow-sm">
                                                            <input value={password} id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <span className="block w-full rounded-md shadow-sm">
                                                            <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-900 border border-transparent rounded-md hover:bg-#1F2937-500 focus:outline-none transition duration-150 ease-in-out" onClick={(e) => setNewPassword({
                                                                emailId: emailId,
                                                                password: password
                                                            })}>Submit</button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                            :
                                            null

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>)


}

export default ForgotPassword;