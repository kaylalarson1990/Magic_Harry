import React from "react";
import "./Header.css";
import glasses from "../images/glasses.jpg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li>
            <a href="#" className="glasses">
              <NavLink to="/">
                <img
                  src={glasses}
                  alt="harry potter glasses"
                  className="glasses"
                />
              </NavLink>
            </a>
          </li>
          <li>
            <a href="#">
              <NavLink to="/characters">CHARACTERS</NavLink>
            </a>
          </li>
          <li>
            <a href="#">
              <NavLink to="/spells">SPELLS</NavLink>
            </a>
          </li>
          <li>
            <a href="#">
              <NavLink to="/houses">HOUSES</NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
