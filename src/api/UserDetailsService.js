import { userDetailsURL } from "./URL";
import axios from "axios";

export const getAllUser = () => {
  return axios.get(`${userDetailsURL}/getAllUser`);
};

export const getUser = (userDetails) => {
  return axios({
    method: "POST",
    url: `${userDetailsURL}/getUserFromToken/${userDetails}`,
    data: userDetails,
  });
};

export const updateUser = (updatedUser) => {
  return axios.post(`${userDetailsURL}/updateUser`, {
    userId: updatedUser.userId,
    gender: updatedUser.gender,
    firstName: updatedUser.firstName,
    lastName: updatedUser.lastName,
    emailId: updatedUser.emailId,
    dateOfBirth: updatedUser.dateOfBirth,
    contactNumber: updatedUser.contactNumber,
    countryCode: updatedUser.countryCode,
  });
};

export const getNewPassword = (newPassword) => {
  return axios.post(`http://LIN59017635:8089/home/updatePassword`, newPassword);
};

export const getOTP = (emailId) => {
  return axios.post(
    `http://LIN59017635:8089/home/forgot-password?emailId=${emailId}`,
    emailId
  );
};
