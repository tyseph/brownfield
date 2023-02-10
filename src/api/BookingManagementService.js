import axios from "axios";
import { bookingManagementURL, flightManagementURL } from "./URL";

export const getAllBookings = () => {
  return axios.get(`${bookingManagementURL}/getAllBooking`);
};

export const getBookingsByID = (id) => {
  return axios.get(`${bookingManagementURL}/getBookingById/${id}`);
};

export const getBookingsByDate = (date) => {
  return axios.get(`${bookingManagementURL}/getBookingByDate/${date}`);
};

export const getAllBookingsByUserId = (userId) => {
  return axios.get(`${bookingManagementURL}/getAllBookingByUserId/${userId}`)
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
  return axios.get(`${bookingManagementURL}/getBookedSeats/${flightId}/${dateOfTravelling}`)
}

export const getCreatedOrder = (total) => {
  return axios.post(`${bookingManagementURL}/createOrder/${total}`)
}

export const postBookFlight = (data) => {
  return axios.post(`${bookingManagementURL}/bookFlight`, data)
}