import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../../components/App";
import reducers from "../../reducers";

const handlers = [
  rest.get(
    '/api/promotions/priceoffers/flights/ond/:origin/:destination',
    (req, res, ctx) => {
      return res(
        ctx.json([{
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
        }])
      );
    }
  ),
  rest.get(
    '/api/airports',
    (req, res, ctx) => {
      return res(
        ctx.json([{
            code: "DUS",
            name: "Dusseldorf international Airport",
            city: "Dusseldorf",
          },
          {
            code: "FRA",
            name: "Frankfurt International airport",
            city: "Frankfurt",
          }]
      ));
    }
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


test('fetches offers and renders result', async () => {
    const view =  render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      
      await waitFor(() => screen.findByText(/Dusseldorf/i));

       expect(screen.queryByText(/Show More/i)).not.toBeInTheDocument();

      expect(screen.queryByText(/Sorry No offers available for the above filters/i)).not.toBeInTheDocument();

      expect(view.container.getElementsByClassName("card__side").length).toBe(1);
      
  });