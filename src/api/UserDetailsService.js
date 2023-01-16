import { userDetailsURL } from "./URL";
import axios from "axios";

export const getAllUsers = () => {
    return axios.post(`${userDetailsURL}/adminSearch`);
  };