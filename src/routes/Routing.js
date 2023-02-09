import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/user/Search";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
// import FlightManagement from "../pages/admin/Flights"
// import Passengers from "../pages/admin/Passengers";
// import Bookings from "../pages/admin/Bookings"
import SearchResult from "../pages/user/SearchResult";
import ForgotPassword from "../pages/auth/ForgotPassword";
import FlightBooking from "../pages/user/FlightBooking";
import Seats from "../pages/user/Seats";
import PDFFile from "../pages/user/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer"
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Payments from "../pages/user/PaymentGateway";
import ProtectedRoute from "../ProtectedRoutes";
import ProtectedAdminRoute from "../ProtectedAdminRoutes";
import Profile from "../pages/user/Profile";
import Navbar from '../pages/user/Navbar'

const Routing = () => {


  const [searchDetails, setSearchDetails] = useState({})
  const [flightBooking, setFlightBooking] = useState({})

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<ProtectedAdminRoute><Dashboard /></ProtectedAdminRoute>} />
      </Routes>
      
      <Navbar />
        <Routes>
        
          <Route path="/" element={<Home SetSearchDetails={setSearchDetails} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          

          {/* <Route path="/flightmanagement" element={<FlightManagement />} /> */}
          {/* <Route path="/bookingmanagement" element={<BookingManagement />} /> */}
          {/* <Route path="/passengers" element={<Passengers />} /> */}
          <Route path="/flights" element={<SearchResult SearchResult={searchDetails} SetFlightBooking={setFlightBooking} />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/:id/flightbooking" element={<ProtectedRoute><FlightBooking FlightBooking={flightBooking} /></ProtectedRoute>} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/pdf" element={
            <PDFDownloadLink document={<PDFFile />} fileName="FORM">
              {({ loading }) => (loading ? <button>Loading Document</button> : <button>Download </button>)}
            </PDFDownloadLink>} /> */}
          <Route path="/pdf" element={
            <PDFFile />
          } />


          {/* <Route path="/" element={<Home />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
