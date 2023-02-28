import { cleanup} from "@testing-library/react";

import { filter } from "../utils/Filter";

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
    destination: "FCO",
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
    origin: "FCO",
    destination: "FRA",
    departureDate: "2023-01-14",
    returnDate: "2023-01-17",
    seatAvailability: "7",
    price: {
      amount: 80.96,
      currency: "EUR",
    },
    offerType: "BestPrice",
    uuid: "SA02903-b790715e-b2b8-4d23-ac27-d4RR8c0e84af",
  },
];

const origin = {
  code: "DUS",
  lat: "41.8026",
  lon: "12.2551",
  name: "Leonardo da Vinci International Airport",
  city: "Rome",
  state: "Lazio",
  country: "Italy",
  woeid: "22318195",
  tz: "Europe/Rome",
  phone: "+39 06 65951",
  type: "Airports",
  email: "",
  url: "http://www.adr.it/",
  runway_length: "12795",
  elev: "14",
  icao: "LIRF",
  direct_flights: "181",
  carriers: "124",
};

const destination = {
  code: "FRA",
  lat: "41.8026",
  lon: "12.2551",
  name: "Leonardo da Vinci International Airport",
  city: "Rome",
  state: "Lazio",
  country: "Italy",
  woeid: "22318195",
  tz: "Europe/Rome",
  phone: "+39 06 65951",
  type: "Airports",
  email: "",
  url: "http://www.adr.it/",
  runway_length: "12795",
  elev: "14",
  icao: "LIRF",
  direct_flights: "181",
  carriers: "124",
};

describe("Filter utility", () => {
  it("returns all offers", () => {
    const filteredData = filter(data, null, null);

    expect(filteredData.length).toBe(3);
  });

  it("returns filtered by origin", () => {
    const filteredData = filter(data, origin, null);

    expect(filteredData.length).toBe(2);
  });

  it("returns filtered by origin and destination", () => {
    const filteredData = filter(data, origin, destination);

    expect(filteredData.length).toBe(1);
  });
});
