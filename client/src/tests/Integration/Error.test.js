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
        (res) => {
            res.status = 500
            res.headers.set('Content-Type', 'application/json');
            return res;
        }
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


test('fetches offers and fails due to error', async () => {
    render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      
      expect(await screen.findByText(/Looks like there's a connection issue/i)).toBeInTheDocument();      
  });