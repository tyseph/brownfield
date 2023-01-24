import Icon from "./Icon";
import IconButton from "./IconButton";
import NameCard from "./NameCard";
import Graph from "./Graph";
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import './componentscss.css'
import AdminHeader from "./AdminHeader";
import { useSelector, useStore } from "react-redux";
import { useState } from "react";

const Content = ({ onSidebarHide, revenue, user, graph }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // console.log(user)
  // const [data, setData] = useState(useSelector((state) => state.admin))
  useSelector((state) => state.admin)
  // const tmp = useSelector((state) => state.admin)
  // console.log(tmp)
  const store = useStore()
  // console.log(data)

  const employeeData = [
    {
      id: 1,
      name: 'Flights',
      position: "All Airports",
      transactions: store.getState().admin.flights.length,
      rise: true,
      tasksCompleted: store.getState().admin.airports.length,
      imgId: <FlightIcon />,
    },

    {
      id: 2,
      name: 'Bookings',
      position: "Total Users",
      transactions: store.getState().admin.bookings.length,
      rise: true,
      tasksCompleted: user.length,
      imgId: <DashboardIcon />,
    },

    {
      id: 3,
      name: 'Revenue',
      position: "Net Revenue",
      transactions: revenue,
      rise: true,
      tasksCompleted: 1,
      imgId: <AirplaneTicketIcon />,
    },
  ];

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      {/* <div onClick={onSidebarHide}>
        SAJAL
      </div> */}
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <AdminHeader />
        {employeeData.map(
          ({
            id,
            name,
            position,
            transactions,
            rise,
            tasksCompleted,
            imgId,
          }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              position={position}
              transactionAmount={transactions}
              rise={rise}
              tasksCompleted={tasksCompleted}
              imgId={imgId}
            />
          ),
        )}

        <div className="w-full p-2 lg:w-full">
          <div className="rounded-lg bg-gray-900 sm:h-auto h-60">
            <Graph revenue={revenue} graph={graph} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;