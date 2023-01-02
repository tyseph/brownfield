import { useState } from 'react';
import Sidebar from "./adminComponents/Sidebar";
import Content from './adminComponents/Content';
import './adminComponents/componentscss.css'
import FlightManagement from './flightManagement/FlightManagement';

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [selected, setSelected] = useState('1');
  // const navigate = useNavigate();
  const onMenuClick = (key) => {
    setSelected(key)
    console.log('clicked', key)
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
        selected === "2" ? <div className='text-gray-300 text-xl'>View Booking</div> : null
      }
      {
        selected === "3" ? <div className='text-gray-300 text-xl'>Passenger Details</div> : null
      }

    </div >
  );
}

export default Dashboard;