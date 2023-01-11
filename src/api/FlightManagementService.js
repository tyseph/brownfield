import axios from "axios";
import { flightManagementURL } from "./URL";

export const getAllFlights = () => {
  // console.log("calledService")
  return axios.get(`${flightManagementURL}/getAllFlights`);
};

export const getFlightByID = (id) => {
  return axios.get(`${flightManagementURL}/getFlight/${id}`);
};

export const getFlightByTime = (time) => {
  return axios.get(`${flightManagementURL}/${time}`);
};

export const getAllAiriports = () => {
  return axios.get(`${flightManagementURL}/getAllAirports`);
};

export const getFlightBySearch = (obj) => {
  console.log(obj.source, obj.destination);
  return axios.post(`${flightManagementURL}/search`, obj);
};

export const getByAdminSearch = (obj) => {
  return axios.post(`${flightManagementURL}/adminSearch`, {
    flightId: obj.flightId,
    source: obj.src,
    destination: obj.des,
    time: obj.time
  });
};

export const postFlightData = (obj) => {
  return axios.post(`${flightManagementURL}/addFlight`, obj);
};

export const putUpdateFlightData = (flightId, obj) => {
  return axios.post(`${flightManagementURL}/editFlight/${flightId}`, obj);
}

// http://LIN59017635:8081/editFlight/{flightId}
// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/morningFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/afternoonFlights

// [12:18] Manikwar, Sangameshwar Dnyaneshwar
// http://LIN59017635:8081/nightFlights
