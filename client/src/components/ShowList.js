import React, { useState } from "react";
import ShowListItem from "./ShowListItem";
import { textLabel } from "../labels/TextLables";

function ShowList(props = {}) {
  const initialOffset = 8;
  const increments = 8;
  const [offset, setOffset] = useState(initialOffset);

  const { offersList = [] } = props;
  const offersToDisplay = offersList.slice(0, offset);

  return (
    <div aria-labelledby="list-description" className="showlist_container">
      <div className="showlist_descripton">
        <span className="showlist_header" id="list-description">
          {" "}
          {textLabel.OFFERS_HEADER}
        </span>
        <p className="showlist_detail"> {textLabel.SELECT_FILTER_LABEL} </p>
      </div>
      <div className="showlist__wrapper">
        {offersToDisplay.length > 0 ? (
          offersToDisplay.map((item) => {
            return (
              <ShowListItem
                data={item}
                key={item.uuid}
                airportCodeToCityMap={props.airportCodeToCityMap}
              />
            );
          })
        ) : (
          <div className="showlist_empty" aria-labelledby="emptyOffer">
            <span id="emptyOffer">{textLabel.NO_OFFERS}</span>
          </div>
        )}
      </div>
      {offersList.length > offset ? (
        <button
          className="btn-blue"
          onClick={() => setOffset((offset) => offset + increments)}
        >
          {textLabel.SHOW_MORE}
        </button>
      ) : null}
    </div>
  );
}

export default ShowList;
