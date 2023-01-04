import Icon from "./Icon";
import IconButton from "./IconButton";
import NameCard from "./NameCard";
import Graph from "./Graph";
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import './componentscss.css'
import SearchIcon from '@mui/icons-material/Search';

// import AdminHeader from "../../AdminHeader";

const AdminHeader = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
                <div className="">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold text-gray-900">Hello David</div>
                        <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                            <Icon path="res-react-dash-premium-star" />
                            <div className="ml-2 font-bold text-premium-yellow">
                                ADMIN
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <Icon
      path="res-react-dash-date-indicator"
      className="w-3 h-3"
    /> */}
                        <div className="ml-2 font-bold">{new Date().toLocaleDateString('en-US', { month: 'long', year: "numeric", day: "numeric", weekday: 'long' })}
                        </div>
                    </div>
                </div>
                {/* <IconButton
                icon="res-react-dash-sidebar-open"
                className="block sm:hidden"
                onClick={onSidebarHide}
            /> */}
            </div>
            <div className="w-full  sm:w-56 mt-4 sm:mt-0 relative">
                <SearchIcon className="w-5 h-5 search-icon left-3 absolute" />
                <form action="#" method="POST">
                    <input
                        type="text"
                        name="company_website"
                        id="company_website"
                        className="pl-10 py-2 font-bold placeholder-zinc-500 pr-2 text-gray-200 block w-full rounded-lg border-gray-900 bg-gray-900"
                        placeholder="Search..."
                    />
                </form>
            </div>
        </div>
    )
}

export default AdminHeader;