import Icon from "../adminComponents/Icon";
import IconButton from "../adminComponents/IconButton";
import NameCard from "../adminComponents/NameCard";
import Graph from "../adminComponents/Graph";
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AdminHeader from "../adminComponents/AdminHeader";
import FlightTable from "./FlightTable";


const FlightManagement = () => {
  const employeeData = [
    {
      id: 1,
      name: 'Flights',
      position: "Currently Running Flights",
      transactions: 15,
      rise: true,
      tasksCompleted: 3,
      imgId: <FlightIcon />,
    },

    {
      id: 2,
      name: 'Bookings',
      position: "Today's Booking",
      transactions: 1570,
      rise: true,
      tasksCompleted: 5,
      imgId: <DashboardIcon />,
    },

    {
      id: 3,
      name: 'Revenue',
      position: "Net Revenue",
      transactions: 2600,
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

        {/* TABLE HERE */}

        <FlightTable />
      </div>
    </div >
  )
}

export default FlightManagement;