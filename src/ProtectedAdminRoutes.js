import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { checkToken } from "./api/authenticationService";
const ProtectedAdminRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('USER_KEY');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        } else {
            checkToken(userToken).then((res) => {
                if (res.data === 'Admin') {
                    console.log(res.data)
                    setIsLoggedIn(true);
                } else {
                    console.log(res.data)
                    setIsLoggedIn(false)
                }
            })
        }
        
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedAdminRoute;