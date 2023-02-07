import axios from "axios";
import { bookingManagementURL } from "./URL";

export const getAllBookings = () => {
  return axios.get(`${bookingManagementURL}/getAllBooking`);
};

export const getBookingsByID = (id) => {
  return axios.get(`${bookingManagementURL}/getBookingById/${id}`);
};

export const getBookingsByDate = (date) => {
  return axios.get(`${bookingManagementURL}/getBookingByDate/${date}`);
};


export const getByAdminSearch = (obj) => {
  return axios.post(`${bookingManagementURL}/adminBookingSearch`, {
    bookingId: obj.bookingId,
    sourceCode: obj.sourceCode,
    destinationCode: obj.destinationCode,
    date: obj.date,
    time: obj.time
  });
};

export const getTotalRevenue = () => {
  return axios.get(`${bookingManagementURL}/getTotalRevenue`);
};

// http://lin59017635:8089/booking/getTotalRevenue


export const GetRevenueByDate = () => {
  return axios.get(`${bookingManagementURL}/getTotalRevenueByDate`)
}

export const getBookedSeats = (flightId, dateOfTravelling) => {
  return axios.get(`http://LIN51016635.corp.capgemini.com:8089/booking/getBookedSeats/${flightId}/${dateOfTravelling}`)
}