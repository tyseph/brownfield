import Icon from "../adminComponents/Icon";
import IconButton from "../adminComponents/IconButton";
import NameCard from "../adminComponents/NameCard";
import Graph from "../adminComponents/Graph";
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AdminHeader from "../adminComponents/AdminHeader";
import SearchIcon from '@mui/icons-material/Search';


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

        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              {/* <h2 class="text-2xl font-semibold leading-tight">Invoices</h2> */}
              <div className="w-auto sm:w-56 mt-4 sm:mt-0 relative">
                <Icon
                  path="res-react-dash-search"
                  className="w-5 h-5 search-icon left-3 absolute"
                />
                <SearchIcon />
                <form>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="pl-10 py-2 pr-2 text-gray-200 block focus:outline-none w-full rounded-md bg-gray-900"
                    placeholder="Enter Airport Code"
                  />
                </form>
              </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div
                class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
              >
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                      >
                        Client / Invoice
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                      >
                        Issued / Due
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-900 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Molly Sanders
                            </p>
                            <p class="text-gray-600 whitespace-no-wrap">000004</p>
                          </div>
                        </div>
                      </td> */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                        <p class="text-gray-600 whitespace-no-wrap">USD</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                        <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Paid</span>
                        </span>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                      >
                        <button
                          type="button"
                          class="inline-block text-gray-500 hover:text-gray-200"
                        >
                          <svg
                            class="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FlightManagement;