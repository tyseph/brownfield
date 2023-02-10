import React from "react";
import logo from '../../elements/brownfieldlogo.png'
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/UserDetailsService";
import { useEffect, useState } from 'react';


const Navbar = () => {

    const [user, setUser] = useState('')

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear()
        navigate('/login')
    }

    const handleLogin = () => {
        navigate('/login')
    }



    useEffect(() => {
        getUser(localStorage.getItem('USER_KEY')).then(res => {
            console.log(res.data.firstName)
            setUser(res.data.firstName)
        }).catch(err => {
            console.log('ff', err)
        })
    }, [])
    console.log(window.location.href)


    return (
        <nav className="nav flex items-center justify-end flex-wrap bg-gray-800 p-6">
            <div onClick={() => navigate('/')} className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" src={logo} />
                <span className="font-semibold text-xl tracking-tight">Brownfield Airlines</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="flex space-x-4 w-full block flex-grow lg:flex justify-end lg:items-center lg:w-auto">
                {/* <div className="text-sm lg:mt-0 ">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                        Blog
                    </a>
                </div> */}
                {window.location.href != 'http://localhost:3000/' ?
                    <div>
                        <a className="inline-block
                border-2 border-gray-800 py-2 px-8
                transition-colors ease-out
                duration-500 text-white
                bg-blue-800
                bg-gradient-to-r
                from-blue-800 
                rounded-lg
                hover:from-white hover:to-gray-300 
                hover:text-black hover:border-white uppercase" onClick={() => navigate('/')}>Home</a>
                    </div> : null}

                {localStorage.getItem('USER_KEY') == null ?
                    window.location.href == 'http://localhost:3000/register' ? null :
                        <div>
                            <a className="inline-block
               border-2 border-gray-800 py-2 px-6
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white uppercase" onClick={() => navigate('/register')}>Signup</a>
                        </div> :
                    <div className="flex items-center flex-shrink-0 text-white mr-3">
                        <span className="font-semibold text-xl tracking-wide">Hello,   {user}</span>
                    </div>
                }



                <div>
                    {window.location.href != 'http://localhost:3000/login' ? localStorage.getItem('USER_KEY') != null ?
                        <a className="inline-block
                        border-2 border-gray-800 py-2 px-8
                        transition-colors ease-out
                        duration-500 text-white
                        bg-red-800
                        bg-gradient-to-r
                        from-red-800 
                        rounded-lg
                        hover:from-white hover:to-gray-300 
                        hover:text-black hover:border-white uppercase uppercase tracking-wide" onClick={handleLogout}>Logout</a> :
                        <a className="inline-block
               border-2 border-gray-800 py-2 px-8
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white uppercase" onClick={handleLogin}>Login</a> : null

                    }

                </div>

            </div>
        </nav>
    )
}

export default Navbar;