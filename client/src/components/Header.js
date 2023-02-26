import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import logo from "../assets/img/logo.jpg";
import '../css/header.css';

class Header extends Component {

  render() {
    return (
      <header aria-label="Header" className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"></span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#saction-about" className="navigation__link">
                  About Us
                </a>
              </li>
              <li className="navigation__item">
                <a href="#section-features" className="navigation__link">
                  Your Benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#section-stories" className="navigation__link">
                  Contact
                </a>
              </li>
              <li className="navigation__item">
                <a href="#section-book" className="navigation__link">
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ showList }) => {
  return { showList };
};

export default connect(mapStateToProps, actions)(Header);
