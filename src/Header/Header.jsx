import React from "react";
import "./Header.css";
import MischiefManaged from "../images/MischiefManaged.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li><a href="#">WIZARDLY WORLD</a></li>
          <li><a href="#">CHARACTERS</a></li>
          <li><a href="#">SPELLS</a></li>
          <li><a href="#">HOUSES</a></li>
        </ul>
      </nav>
    </header>
  );
};
