export const getAllFlights = () => {
    axios.get('http://LIN51016635:8082/getAllFlights')
        .then(function (response) {
            // handle success
            console.log(response.data);
            var res = response.data.sort(({ flightId: a }, { flightId: b }) => a - b);
            setFlights(res)
            // console(res.length)
            flightCount(res.length)

        })
        .catch(function (error) {
            // handle error
            console.log(error.message)
        })
}