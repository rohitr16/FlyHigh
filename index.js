const express = require("express");
const bodyParser = require("body-parser");
const responseObjOffers = require("./responses/offers.json");
const responseObjAirports = require("./responses/airports.json");

const app = express();

app.use(bodyParser.json());

app.get(
  "/api/promotions/priceoffers/flights/ond/:origin/:destination",
  (req, res) => {
    const departureDate = req.query.departureDate;
    const returnDate = req.query.returnDate;
    const service = req.query.service;

    console.log(departureDate, returnDate, service);
    console.log(req.params);

    res.send(responseObjOffers);
  }
);

app.get("/api/airports", (req, res) => {
  const filteresRes = responseObjAirports.filter((item) => {
    return item.type === "Airports" && item.name !== "";
  });
  res.send(filteresRes);
});

/**
 * EXPRESS WILL SERVE PRODUCTION FILES
 * LIKE main.js, main.css
 */
app.use(express.static("client/build"));

/*
 * IF ANYOTHER ROUTE FOR WHICH NO EXPRESS ROUTE
 * IS DEFINED THEN LOAD INDEX.HTML (REACT ROUTE)
 */
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
