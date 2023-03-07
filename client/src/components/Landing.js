import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import ShowList from "./ShowList";
import InputBox from "./InputBox";
import * as actions from "../actions";
import "../css/landing.css";
import { filter } from "../utils/Filter";

function Landing(props) {
  
  const navigate = useNavigate();

  const [valueOrigin, setValueOrigin] = useState(null);
  const [valueDest, setValueDest] = useState(null);

  const { getAirports, getPriceOffers, loadingCount } = props;

  useEffect(() => {
    const origin = "ANY";
    const destination = "ANY";
    getAirports(navigate);
    getPriceOffers(
      { urlParams: { origin, destination }, queryParams: {} },
      navigate
    );
  }, []);

  const isLoading = !!loadingCount;

  return (
    <main className="list__container">
      <div className="loader_container">
        <Vortex
          visible={isLoading}
          height="180"
          width="180"
          ariaLabel="vortex-loading"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
      {!isLoading && (
        <div className="input_container">
          <InputBox
            label="Departure Airport "
            options={props.airportList}
            value={valueOrigin}
            setValue={setValueOrigin}
          />
          <InputBox
            label="Arrival Airport "
            options={props.airportList}
            value={valueDest}
            setValue={setValueDest}
          />
        </div>
      )}
      {!isLoading && (
        <ShowList
          offersList={filter(props.offersList, valueOrigin, valueDest)}
          airportCodeToCityMap={props.airportCodeToCityMap}
        />
      )}
    </main>
  );
}

const mapStateToProps = ({ offers = {}, airports = {}, loader }) => {
  return {
    offersList: offers.offersList,
    airportList: airports.airportList,
    airportCodeToCityMap: airports.airportCodeToCityMap,
    loadingCount: loader.loadingCount,
  };
};

export default connect(mapStateToProps, actions)(Landing);
