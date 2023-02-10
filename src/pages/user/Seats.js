import '../../styles/Seats.css'

const Seats = ({ arr, seatHandler, booked }) => {


    var bgcolor = ''

    return (
        <>
            {
                arr.map(p => {
                    return (
                        // <div class="seats">
                        <div className="seats" id={p}
                            {
                            ...booked.includes(p) ?
                                bgcolor = "#ff7272" :
                                bgcolor = ""
                            }

                            style={{
                                backgroundColor: bgcolor,
                                borderRadius: '10px'
                            }}
                            onClick={() => seatHandler(p)}>
                            <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-seat-car-service-icongeek26-outline-icongeek26.png" />
                            <p className='font-xs text-center'>{p}</p>
                        </div>

                        // </div>
                    )
                })
            }
        </>
    )
}

export default Seats;