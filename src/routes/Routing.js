import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/user/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
import FlightManagement from "../pages/admin/Flights"
import Passengers from "../pages/admin/Passengers";
import Bookings from "../pages/admin/Bookings"
import SearchResult from "../pages/user/SearchResult";
import ForgotPassword from "../pages/auth/ForgotPassword";
import FlightBooking from "../pages/user/FlightBooking";
import Seats from "../pages/user/Seats";
import PDFFile from "../pages/user/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer"
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

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
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/flights" element={<SearchResult />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/:id/flightbooking" element={<FlightBooking />} />
          <Route path="/seats" element={<Seats />} />

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
