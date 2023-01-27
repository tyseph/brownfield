import { userDetailsURL } from "./URL";
import axios from "axios";

export const getAllUser = () => {
  return axios.get(`${userDetailsURL}/getAllUser`);
};

export const getUser = (userDetails) => {
  return axios({
      'method': 'POST',
      'url': `${userDetailsURL}/getUserFromToken`,
      'data': userDetails,
  })
}