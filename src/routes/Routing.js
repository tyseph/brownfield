import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/user/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
import FlightManagement from "../pages/admin/Flights"
import Passengers from "../pages/admin/Passengers";
import BookingManagement from "../pages/admin/bookingManagement/BookingManagement"

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flightmanagement" element={<FlightManagement />} />
          <Route path="/bookingmanagement" element={<BookingManagement />} />
          <Route path="/passengers" element={<Passengers />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
