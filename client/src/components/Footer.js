import React from "react";
import "../css/App.css";
import '../css/footer.css';
import {textLabel} from "../labels/TextLables"; 

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer">
      <h2 id="footer" style={{ display: "none" }}>
        {textLabel.FOOTER}
      </h2>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {textLabel.COMPANY}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {textLabel.CONTACT_US}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {textLabel.CARRESR}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {textLabel.PRIVACY_POLI}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            {textLabel.DEVELOPED_BY}{" "}
            <a href="#" className="footer__link">
             {textLabel.NAME}
            </a>{" "}
            {textLabel.USAGE}
          </p>
        </div>
      </div>
    </footer>
  );
}
