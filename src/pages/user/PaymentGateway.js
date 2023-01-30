import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import useRazorpay, { RazorpayOptions, createOrder } from "react-razorpay";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBooking } from "../../redux/user/userActions";

const Payments = (seats) => {

    const [order, setOrder] = useState({})
    const location = useLocation();
    const [data, setData] = useState(location.state.data)
    const total = data.fare.totalFare + data.fare.travelCharges
    const dispatch = useDispatch()

    useEffect(() => {
        axios.post(`http://LIN59017635.corp.capgemini.com:8089/booking/createOrder/${total}`).then((res) => {
            console.log(res.data)
            setOrder(res.data)
        })
    }, [])

    const navigate = useNavigate()
    const test = async () => {
        console.log(data)

        handlePayment()

        await axios.post("http://LIN59017635.corp.capgemini.com:8089/booking/bookFlight", data).then(res => {
            console.log(res)
            dispatch(addBooking(res.data))
        }).catch(err => {
            console.log(err)
        }).then().finally()

    }
    const Razorpay = useRazorpay();

    const handlePayment = () => {
        // console.log(JSON.stringify(order))



        const options = {
            key: "rzp_test_ugc5Yl6sH3uH5X",
            amount: order.amount,
            currency: order.currency,
            name: "Acme Corp",
            description: "Test Transaction",
            // image: "https://example.com/your_logo",
            order_id: order.id,
            handler: (res) => {
                console.log(res);
                data.paymentId = res.razorpay_payment_id
                alert("Paid")
                navigate("/pdf")
            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
        rzpay.on('payment.failed', function (response) {
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
            // alert()
            console.log(response)
            alert("Failed")
        });
    }

    return (
        <div className="App">
            {/* <button onClick={test}>Payment</button> */}
            <button className="ml-4 mt-3 text-md
            border-2 border-gray-100 py-2 px-4
            transition-colors ease-out
            duration-500 text-white
            bg-blue-900
            bg-gradient-to-r
            from-blue-900 
            rounded-lg
            hover:from-gray-900 hover:to-gray-900 
            hover:text-white hover:border-gray-900" onClick={test}> Continue... </button>

            {/* <button onClick={handlePayment}>Click</button> */}
        </div>
    );
}


export default Payments;


// <div class="container">
//     <div class="row">

//         <div class="col-sm-4 pb-5">
//             <div class="card">
//                 <div class="card-body m-4">
//                     <div class="d-grid gap-2">
//                         <button class="btn btn-primary" type="button" onclick="CreateOrderID(1)">Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     </div>
// </div>
// <button id="rzp-button1">Pay</button>
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
// <script>
//     let xhr = new XMLHttpRequest();
//     function CreateOrderID(amount) {
//         console.log("hiiiii")
//         xhr.open("POST", "http://LIN51016635:8080/createOrder?amount=" + amount);
//         xhr.setRequestHeader("Content-Type", "application/json");

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 console.log(xhr.status);
//                 console.log(JSON.parse(xhr.responseText))
//                 console.log(JSON.parse(xhr.responseText).amount)
//             }
//         };

//         xhr.send();
//     }



//     document.getElementById('rzp-button1').onclick = function (e) {

//         const order = JSON.parse(xhr.responseText);
//         var options = {
//             "key": "rzp_test_ugc5Yl6sH3uH5X", // Enter the Key ID generated from the Dashboard
//             "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             "currency": order.currency,
//             "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//             "name": "BrownField Airlines",
//             "handler": function (response) {
//                 alert(response.razorpay_payment_id);
//                 alert(response.razorpay_order_id);
//                 alert(response.razorpay_signature)
//             },
//             "prefill": {
//                 "name": "",
//                 "email": "",
//                 "contact": ""
//             },
//             "notes": {
//                 "address": "Razorpay Corporate Office"
//             },
//             "theme": {
//                 "color": "#3399cc"
//             }
//         };
//         var rp = new Razorpay(options);

//         rp.open();

//         rp.on('payment.failed', function (response) {
//             alert(response.error.code);
//             alert(response.error.description);
//             alert(response.error.source);
//             alert(response.error.step);
//             alert(response.error.reason);
//             alert(response.error.metadata.order_id);
//             alert(response.error.metadata.payment_id);
//         });
//     }

// </script>