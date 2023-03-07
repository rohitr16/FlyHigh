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

  /**
   * Ariports won't be changing that often , so api is called only once
   */
  
  useEffect(() => {
    const {getAirports } = props;
    getAirports(navigate);
  },[]);

 
  /**
   * To make get offers call when origin or destination changes to simulate
   * actual behaviour when we get actual offers in response instead of mocked
   */

  useEffect(() => {
    const { getPriceOffers} = props;
    const origin = (valueOrigin) ? valueOrigin.code : "ANY";
    const destination = (valueDest) ? valueDest.code : "ANY";
    getPriceOffers(
      { urlParams: { origin, destination }, queryParams: {} },
      navigate
    );
  },[valueOrigin, valueDest]);


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
