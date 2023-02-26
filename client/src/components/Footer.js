import React from "react";
import "../css/App.css";
import logo from "../assets/img/logo.jpg";
import '../css/footer.css';

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer">
      <h2 id="footer" style={{ display: "none" }}>
        Footer
      </h2>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" class="footer__link">
                  Privacy polic
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Developed by{" "}
            <a href="#" className="footer__link">
              Rohit Ranjan
            </a>{" "}
            for any personal and commercial use.
          </p>
        </div>
      </div>
    </footer>
  );
}
