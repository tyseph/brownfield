import React from "react";
import logo from "../../elements/brownfieldlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../api/UserDetailsService";
import { useEffect, useState } from "react";
import { getLoggedUser } from "../../redux/user/userActions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState("");

  const FRONTEND_URL = 'http://localhost:3000'
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const dispatch = useDispatch()

  useEffect(() => {
    getUser(localStorage.getItem('USER_KEY')).then(res => {
      console.log(res.data)
      setUser(res.data.firstName)
      dispatch(getLoggedUser(res.data))
    }).catch(err => {
      console.log('ff', err)
    })
  }, [localStorage.getItem('USER_KEY')]);
  // console.log(window.location.href);

  // window.location.href !== "${process.env.REACT_APP_URL}/dashboard"

  return (
    <nav className={`${window.location.href === `${FRONTEND_URL}/dashboard` ? 'hidden' : 'nav flex items-center justify-end flex-wrap bg-gray-900 p-6'}`}>
      <div
        onClick={() => navigate("/")}
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <img
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          src={logo}
        />
        <span className="font-semibold text-xl tracking-tight">
          Brownfield Airlines
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-1 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>


      <div className="flex space-x-4 w-full block flex-grow lg:flex justify-end lg:items-center lg:w-auto">
        <div>
          {window.location.href === `${FRONTEND_URL}/` ?
            <div>
              {
                localStorage.getItem("USER_KEY") !== null ? <a
                  className="inline-block
                  border-2 border-gray-800 py-2 px-8
                  transition-colors ease-out
                  duration-500 text-white
                  bg-blue-800
                  bg-gradient-to-r
                  from-blue-800 
                  rounded-lg
                  hover:from-white hover:to-gray-300 
                  hover:text-black hover:border-white"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </a> : null
              }
            </div>
            :
            <div>

              <a
                className="inline-block
              border-2 border-gray-800 py-2 px-8
              transition-colors ease-out
              duration-500 text-white
              bg-blue-800
              bg-gradient-to-r
              from-blue-800 
              rounded-lg
              hover:from-white hover:to-gray-300 
              hover:text-black hover:border-white"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </div>
          }
        </div>
        {
          localStorage.getItem("USER_KEY") !== null ?
            <div>

              <a
                className="inline-block
                        border-2 border-gray-800 py-2 px-4
                        transition-colors ease-out
                        duration-500 text-white
                        bg-red-800
                        bg-gradient-to-r
                        from-red-800 
                        rounded-lg
                        hover:from-white hover:to-gray-300 
                        hover:text-black hover:border-white uppercase tracking-wide"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div> :
            <div className="space-x-4">
              <a
                className="inline-block
               border-2 border-gray-800 py-2 px-8
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white"
                onClick={handleLogin}
              >
                Login
              </a>
              <a
                className="inline-block
               border-2 border-gray-800 py-2 px-8
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white"
                onClick={() => navigate("/register")}
              >
                SignUp
              </a>
            </div>

        }
      </div>
    </nav >
  );
};

export default Navbar;
