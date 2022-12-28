import { useEffect, useState } from "react";
import airportData from "./Data.js";

const Temp = () => {
  const [data, setData] = useState();
  useEffect(() => {
    // // let code = [];
    // // let lat = [];
    // // let long = [];
    // // let name = [];
    // // let city = [];
    // // let state = [];


    airportData.forEach((item) => {
      delete item.woeid
      delete item.tz
      delete item.phone
      delete item.type
      delete item.email
      delete item.url
      delete item.runway_length
      delete item.icao
      delete item.carriers
      delete item.direct_flights
    })

    // console.log(airportData)

    let final = []
    airportData.forEach((item) => {
      if (item.country === "India" && item.name !== "India") {
        final.push(item)
      }
    })
    console.log(final)
    

  }, []);
  return (
    <>
      <div>
        {/* {airportData.map((dta, i) => {
          return (
            <div key={dta.code}>
              <ul>
                <li>{dta.name}</li>
              </ul>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default Temp;
