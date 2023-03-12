const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51MZJBqSJ1WGgLoZ22srwHXRuHYK5YsN0h5G8JLjzwtxUDF2SY8yPrKlm2QfKUHJISBUdinG7VQ6re0LRFUuKbhBs001baFkBSk')


const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

try {app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  // const paymentMethod = await stripe.paymentMethods.create(
  //   {
  //     type: 'card',
  //     card: {
  //       number: '4242424242424242',
  //       exp_month: 6,
  //       exp_year: 2021,
  //       cvc: '314',
  //     },
  //   }
  // );

  // const attachPaymentToCustomer = await stripe.paymentMethods.attach(
  //   paymentMethod.id,  // <-- your payment method ID collected via Stripe.js
  //   // { customer: customer.id } // <-- your customer id from the request body  
    
  // )

  const paymentIntent = await stripe.paymentIntents.create ({
    amount: "10", // subunits of the currency
    currency: 'usd',
    // automatic_payment_methods: { enabled: true }
  });

  //const paymentIntentConfirmation = await stripe.paymentIntents.confirm(paymentIntent.id, { payment_method: paymentMethod.id });

  
  // console.log("hiiiiiiiiiiii");
  // console.log(paymentIntent.id);
  // console.log(stripe);
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
}) }
catch (e) {
;
  };

// - Listen command
exports.api = functions.https.onRequest(app);