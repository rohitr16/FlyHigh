import React from "react";
import {cleanup, render, screen} from '@testing-library/react';

import ShowListItem from "../components/ShowListItem";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(cleanup);

const data = {
    origin: "DUS",
    destination: "FRA",
    departureDate: "2023-01-14",
    returnDate: "2023-01-17",
    seatAvailability: "7",
    price: {
      amount: 100.96,
      currency: "EUR"
    },
    offerType: "BestPrice",
    uuid: "SA00003-b790715e-b2b8-4d23-ac27-d4RR8c0e84af"
}

const airportCodeToCityMap =  {
    DUS: "Dusseldorf",
    FRA: "Frankfurt"
}

it("renders with  offers", () => {
    const view = render(<ShowListItem  data={data} airportCodeToCityMap={airportCodeToCityMap} />, container);
    expect(screen.getAllByText('Dusseldorf')).toBeTruthy();
    expect(screen.getAllByText('Frankfurt')).toBeTruthy();
    expect(screen.getAllByText('100,96 €')).toBeTruthy();
    expect(view).toMatchSnapshot();
    
  });
