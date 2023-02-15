import Icon from "./Icon";
import IconButton from "./IconButton";
import NameCard from "./NameCard";
import Graph from "./Graph";
import FlightIcon from "@mui/icons-material/Flight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import "./componentscss.css";
import SearchIcon from "@mui/icons-material/Search";

const AdminHeader = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="w-full sm:flex p-2 items-end">
      <div className="sm:flex-grow flex justify-between">
        <div className="">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-gray-900">Hello Admin</div>
            <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
              <Icon path="res-react-dash-premium-star" />
              <div className="ml-2 font-bold text-premium-yellow">ADMIN</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2 font-bold">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
                weekday: "long",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
