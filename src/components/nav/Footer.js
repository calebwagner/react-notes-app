import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = (props) => {
  return (
    <ul className="footer">
      <li className="footer__item">
        <Link className="footer__link" to="/">
          Copyright © 2021
        </Link>
      </li>
    </ul>
  );
};
