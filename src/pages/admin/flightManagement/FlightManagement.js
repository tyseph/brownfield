import Icon from "../adminComponents/Icon";
import IconButton from "../adminComponents/IconButton";
import NameCard from "../adminComponents/NameCard";
import Graph from "../adminComponents/Graph";
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AdminHeader from "../adminComponents/AdminHeader";
import FlightTable from "./FlightTable";
import { useState } from "react";
import AddFlight from "./AddFlight";


const FlightManagement = () => {

  const [tasksCompleted, setTasksCompleted] = useState()
  const [add, setAdd] = useState(false)

  const getTasks = (count) => {
    setTasksCompleted(count);
  }

  const employeeData = [
    {
      id: 1,
      name: 'Flights',
      position: "Currently Running Flights",
      transactions: tasksCompleted,
      rise: true,
      tasksCompleted: tasksCompleted,
      imgId: <FlightIcon />,
    },

    // {
    //   id: 2,
    //   name: 'Bookings',
    //   position: "Today's Booking",
    //   transactions: 1570,
    //   rise: true,
    //   tasksCompleted: 5,
    //   imgId: <DashboardIcon />,
    // },

    // {
    //   id: 3,
    //   name: 'Revenue',
    //   position: "Net Revenue",
    //   transactions: 2600,
    //   rise: true,
    //   tasksCompleted: 1,
    //   imgId: <AirplaneTicketIcon />,
    // },
  ];
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
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
        <div className="mt-2">
          <div onClick={() => setAdd(!add)} className='button w-40 h-16 bg-gray-900 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1f2937,0_0px_0_0_#6b7280]
    active:border-b-[0px]
    transition-all duration-100 [box-shadow:0_10px_0_0_#1f2937,0_15px_0_0_#6b7280]
    border-b-[1px] border-gray-400
  '>
            <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>{!add ? "Add Flights" : "View All Flights"}</span>
          </div>
        </div>

        <div className="p-2 w-screen justify-center align-center">

          {/* TABLE HERE */}


          {
            add ?
              <AddFlight /> :
              <FlightTable flightCount={getTasks} />
          }
        </div>

      </div>
    </div >
  )
}

export default FlightManagement;