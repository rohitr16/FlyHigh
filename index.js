const express = require('express');
const bodyParser = require('body-parser');
const responseObjOffers = require('./responses/offers.json');
const responseObjAirports = require('./responses/airports.json')

const app = express();

app.use(bodyParser.json());

app.get('/api/promotions/priceoffers/flights/ond/:origin/:destination', (req, res) => {

    const departureDate = req.query.departureDate;
    const returnDate = req.query.returnDate;
    const service  = req.query.service;

    console.log(departureDate, returnDate, service);
    console.log (req.params);

    res.send(responseObjOffers);
});

app.get('/api/airports', (req, res) => {
    res.send(responseObjAirports);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT);