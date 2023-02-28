import React from "react";
import { cleanup, render } from "@testing-library/react";

import ShowList from "../components/ShowList";

afterEach(cleanup);

const data = [
  {
    origin: "DUS",
    destination: "FRA",
    departureDate: "2023-01-14",
    returnDate: "2023-01-17",
    seatAvailability: "7",
    price: {
      amount: 100.96,
      currency: "EUR",
    },
    offerType: "BestPrice",
    uuid: "SA00003-b790715e-b2b8-4d23-ac27-d4RR8c0e84af",
  },
  {
    origin: "DUS",
    destination: "FRA",
    departureDate: "2023-01-14",
    returnDate: "2023-01-17",
    seatAvailability: "7",
    price: {
      amount: 100.96,
      currency: "EUR",
    },
    offerType: "BestPrice",
    uuid: "SA00903-b790715e-b2b8-4d23-ac27-d4RR8c0e84af",
  },
];

const airportCodeToCityMap = {
  DUS: "Dusseldorf",
  FRA: "Frankfurt",
};

let offerlist = [];
describe("show list", () => {
  it("renders with empty offers", () => {
    const view = render(
      <ShowList
        offersList={offerlist}
        airportCodeToCityMap={airportCodeToCityMap}
      />
    );
    expect(view.container.getElementsByClassName("card__side").length).toBe(0);
    expect(view).toMatchSnapshot();
  });

  it("renders with  offers", () => {
    const view = render(
      <ShowList offersList={data} airportCodeToCityMap={airportCodeToCityMap} />
    );
    expect(view.container.getElementsByClassName("card__side").length).toBe(2);
    expect(view).toMatchSnapshot();
  });
});
