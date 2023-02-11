const PrintPassengers = ({ passengerArray }) => {
    return (
        <>
            {
                passengerArray.length > 0 ?
                    <div class="rounded-tr-lg rounded-tl-lg overflow-hidden p-3 shadow-lg bg-gray-900 border-solid border-2 border-gray-900 text-white">

                        <div class="relative">
                            <div class="font-bold text-xl mb-2 text-white bg-gray-900 text-center">Passengers Added</div>

                            <form>
                                {passengerArray.map((item, index) => {
                                    return (
                                        <p key={index} class="text-gray-100 text-base ml-4">
                                            {index + 1}. {item.firstName} {item.lastName}, {item.gender}
                                        </p>
                                    )
                                })}
                            </form>
                        </div>
                    </div>
                    : null
            }</>
    )
}

export default PrintPassengers;