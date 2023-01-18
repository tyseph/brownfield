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

export const getAllUsers = () => {
  return axios.get(`${bookingManagementURL}/getAllUsers`);
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