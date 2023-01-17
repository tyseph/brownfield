import { useEffect, useState } from 'react';
import Sidebar from "./adminComponents/Sidebar";
import Content from './adminComponents/Content';
import './adminComponents/componentscss.css'
import FlightManagement from './flightManagement/FlightManagement';
import BookingManagement from './bookingManagement/BookingManagement';
import { getAllAiriports, getAllFlights } from '../../api/FlightManagementService';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllAirports, GetAllFlights } from '../../redux/admin/adminActions';
import { useSelect } from '@mui/base';

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [selected, setSelected] = useState('0');

  // const navigate = useNavigate();
  const onMenuClick = (key) => {
    setSelected(key)
    console.log('clicked', key)
  }

  useEffect(() => {
    getAllAiriports().then((res) => {
      dispatch(GetAllAirports(res.data))
    })
  }, [])

  const getFlights = () => {
    let tmp;
    getAllFlights().then((res) => {
      if (res.status === 200) {
        // setFlights(res.data.sort(({ flightId: a }, { flightId: b }) => a - b));
        // console.log(res.data)
        dispatch(
          GetAllFlights(
            res.data.sort(({ flightId: a }, { flightId: b }) => a - b)
          )
        );
        tmp = res.data.sort(({ flightId: a }, { flightId: b }) => a - b)
        // setTasksCompleted(res.data.length);
      } else {
        console.log("could not get data");
      }
    });
    // return tmp;
  }

  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(!showSidebar);
        }}
        showSidebar={showSidebar}
        selected={selected}
        onMenuClick={onMenuClick}
      />
      {
        selected === "0" ? <Content
          onSidebarHide={() => {
            onSetShowSidebar(!showSidebar);
          }}
        /> : null
      }
      {
        selected === "1" ? <FlightManagement getFlights={getFlights} /> : null
      }
      {
        selected === "2" ? <BookingManagement /> : null
      }
      {
        selected === "3" ? <div className='text-gray-300 text-xl'>Passenger Details</div> : null
      }

    </div >
  );
}

export default Dashboard;