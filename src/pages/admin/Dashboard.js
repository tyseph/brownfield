import { useEffect, useState } from 'react';
import Sidebar from "./adminComponents/Sidebar";
import Content from './adminComponents/Content';
import './adminComponents/componentscss.css'
import FlightManagement from './flightManagement/FlightManagement';
import BookingManagement from './bookingManagement/BookingManagement';
import { getAllAiriports, getAllFlights } from '../../api/FlightManagementService';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllAirports, GetAllBookings, GetAllFlights, GetAllUsers } from '../../redux/admin/adminActions';
import { useSelect } from '@mui/base';
import { getAllBookings, getAllUsers } from '../../api/BookingManagementService';

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [selected, setSelected] = useState('0');

  // const navigate = useNavigate();
  const onMenuClick = (key) => {
    setSelected(key)
    console.log('clicked', key)
  }

  // console.log(useSelector((state) => state.admin))

  useEffect(() => {
    getAllAiriports().then((res) => {
      // console.log(res.data)
      dispatch(GetAllAirports(res.data))
    })
  }, [])


  useEffect(() => {
    getFlights()
    getBookings()
  }, [])

  const getBookings = () => {
    getAllBookings().then((res) => {
      if (res.status === 200) {
        // setBookings(res.data.sort(({ bookingId: a }, { bookingId: b }) => a - b));
        // console.log('inside get all users', res)
        dispatch(
          GetAllBookings(
            res.data.sort(({ bookingId: a }, { bookingId: b }) => a - b)
          )
        );
        // setTasksCompleted(res.data.length);
      } else {
        console.log("could not get data");
      }
    });
  }

  // const getUsers = () => {
  //   getAllUsers().then((res) => {
  //     dispatch(GetAllUsers(res.data));
  //   });
  // }

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
        // tmp = res.data.sort(({ flightId: a }, { flightId: b }) => a - b)
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
        selected === "1" ? <FlightManagement /> : null
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