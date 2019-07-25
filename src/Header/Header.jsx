import React from "react";
import "./Header.css";
// import MischiefManaged from "../images/MischiefManaged.png";
import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li><a href="#"><NavLink to='/'>WIZARDLY WORLD</NavLink></a></li>
          <li><a href="#"><NavLink to="/characters">CHARACTERS</NavLink></a></li>
          <li><a href="#"><NavLink to="/spells">SPELLS</NavLink></a></li>
          <li><a href="#"><NavLink to="/houses">HOUSES</NavLink></a></li>
        </ul>
      </nav>
    </header>
  );
};
