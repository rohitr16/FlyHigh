import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShowList from "./ShowList";
import InputBox from "./InputBox";
import * as actions from "../actions";
import "../css/landing.css";
import { filter } from "../utils/Filter";

function Landing(props) {
  const navigate = useNavigate();

  const [valueOrigin, setValueOrigin] = useState(null);
  const [inputValueOrigin, setInputValueOrigin] = useState("");

  const [valueDest, setValueDest] = useState(null);
  const [inputValueDest, setInputValueDest] = useState("");

  useEffect(() => {
    const { getPriceOffers, getAirports } = props;
    getPriceOffers(
      { urlParams: { origin: "ON", destination: "ON" }, queryParams: {} },
      navigate
    );
    getAirports(navigate);
  }, []);

  return (
    <main className="list__container">
      <div className="input_container">
        <InputBox
          label="Departure Airport "
          options={props.airportList}
          value={valueOrigin}
          inputValue={inputValueOrigin}
          setValue={setValueOrigin}
          setInputValue={setInputValueOrigin}
        />
        <InputBox
          label="Arrival Airport "
          options={props.airportList}
          value={valueDest}
          inputValue={inputValueDest}
          setValue={setValueDest}
          setInputValue={setInputValueDest}
        />
      </div>
      <ShowList offersList={filter(props.offersList, valueOrigin, valueDest)} airportCodeToCityMap={props.airportCodeToCityMap} />
    </main>
  );
}

const mapStateToProps = ({ offers = {}, airports = {}}) => {
  return { offersList: offers.offersList, airportList: airports.airportList, airportCodeToCityMap: airports.airportCodeToCityMap };
};

export default connect(mapStateToProps, actions)(Landing);
