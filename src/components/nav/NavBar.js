import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

// This is a Presentation Component. Directly expresses HTML.
export const NavBar = (props) => {
  return (
    <>
      <ul className="navbar">
        <li className="navbar__item active">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            NoteBooks
          </Link>
        </li>
      </ul>
    </>
  );
};
