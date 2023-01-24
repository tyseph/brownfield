import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import useRazorpay, { RazorpayOptions, createOrder } from "react-razorpay";

const Payments = () => {

    const [order, setOrder] = useState({})

    const test = () => {
        axios.post(`http://LIN51016635:8080/createOrder/100`).then((res) => {
            console.log(res.data)
            setOrder(res.data)
        })
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
                alert("Paid")
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
            <button onClick={test}>Payment</button>

            <button onClick={handlePayment}>Click</button>
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