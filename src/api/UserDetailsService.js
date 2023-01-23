import { userDetailsURL } from "./URL";
import axios from "axios";

export const getAllUser = () => {
  return axios.get(`${userDetailsURL}/getAllUser`);
};


