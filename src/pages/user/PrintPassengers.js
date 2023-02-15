const PrintPassengers = ({ passengerArray, contactData, count }) => {
  return (
    <>
      {passengerArray.length > 0 ? (
        <div class="rounded-tr-lg rounded-tl-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white">
          <div class="relative">
            <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">
              Passengers Added
            </div>

            <form>
              {passengerArray.map((item, index) => {
                return (
                  <p key={index} class="text-gray-100 text-base ml-4">
                    {index + 1}. {item.firstName} {item.lastName}, {item.gender}
                  </p>
                );
              })}
            </form>
          </div>
        </div>
      ) : null}
      {count <= passengerArray.length ? (
        <div className="pb-4 bg-gray-900 rounded-bl-lg rounded-br-lg px-6">
          <button
            onClick={contactData}
            className=" w-40 text-md
               border-2 border-gray-800 py-2 px-4
               transition-colors ease-out
               duration-500 text-white
               bg-blue-800
               bg-gradient-to-r
               from-blue-800 
               rounded-lg
               hover:from-white hover:to-gray-300 
               hover:text-black hover:border-white"
          >
            Select Seats
          </button>
        </div>
      ) : null}
    </>
  );
};

export default PrintPassengers;
