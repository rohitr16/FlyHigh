import React from "react";
import currencyFormatter from "currency-formatter";

function ShowListItem(props = {}) {
  const { data = {}, airportCodeToCityMap = {} } = props;
  const {
    origin: originCode,
    destination: destinationCode,
    departureDate,
    returnDate,
    price = {},
    seatAvailability,
  } = data;
  const { amount, currency } = price;

  const origin = airportCodeToCityMap[originCode] || originCode;
  const destination = airportCodeToCityMap[destinationCode] || destinationCode;

  return (
    <div
      tabIndex="0" // To make it accessible as it will open a details page .
      aria-label="offer card"
      className="card__side card__side--front"
    >
      <h4 className="card__heading">
        <span className="card__heading-span">
          <span className="card__heading-label">{origin}</span>
          <svg
            fill="#000000"
            height="2rem"
            width="2rem"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 122.88 122.88"
            xmlSpace="preserve"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.63,105.75c0.01-4.03,2.3-7.97,6.03-12.38L1.09,79.73c-1.36-0.59-1.33-1.42-0.54-2.4l4.57-3.9
		              c0.83-0.51,1.71-0.73,2.66-0.47l26.62,4.5l22.18-24.02L4.8,18.41c-1.31-0.77-1.42-1.64-0.07-2.65l7.47-5.96l67.5,18.97L99.64,7.45
		              c6.69-5.79,13.19-8.38,18.18-7.15c2.75,0.68,3.72,1.5,4.57,4.08c1.65,5.06-0.91,11.86-6.96,18.86L94.11,43.18l18.97,67.5
		              l-5.96,7.47c-1.01,1.34-1.88,1.23-2.65-0.07L69.43,66.31L45.41,88.48l4.5,26.62c0.26,0.94,0.05,1.82-0.47,2.66l-3.9,4.57
		              c-0.97,0.79-1.81,0.82-2.4-0.54l-13.64-21.57c-4.43,3.74-8.37,6.03-12.42,6.03C16.71,106.24,16.63,106.11,16.63,105.75
		              L16.63,105.75z"
              />
            </g>
          </svg>
          <span className="card__heading-label">{destination}</span>
        </span>
      </h4>
      <div className="card__details">
        {new Date(departureDate).toDateString()} ⇌{" "}
        {new Date(returnDate).toDateString()}
      </div>
      <div className="card__details">
        <span className="card_seat">
          Only {seatAvailability} seats left at →
        </span>
        <span className="card_amount">
          {currencyFormatter.format(amount, { code: currency })}
        </span>
      </div>
    </div>
  );
}

export default ShowListItem;
