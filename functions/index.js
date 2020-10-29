const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HTu1bBhVFGxsvgk9PxzkGo7KWei4PtCR1fKrrkj8kGtVM1D5ojW8tDDfPCiwfEXwqgdFdJ1lOoBGEHLjHs6acZA004n7v6YL6"
);

// API

// APP Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (req, response) => {
    console.log("Request QUERY IS",req.query);
    const total = req.query.total;

    console.log('payment request received BOOM!! for this amount', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

      response.status(201).send({
          clientSecret: paymentIntent.client_secret
      })
})

//Listen command
exports.api = functions.https.onRequest(app);

//api URL
// http://localhost:5001/challange-7c2c5/us-central1/api