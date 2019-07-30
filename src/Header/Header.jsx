import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import glasses from "../images/glasses.png";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="nav">
            <li>
              <a href="#" className="glasses">
                <NavLink to="/" exact activeClassName="active">
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
                <NavLink to="/characters" exact activeClassName="active">
                  CHARACTERS
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/spells" exact activeClassName="active">
                  SPELLS
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/houses" exact activeClassName="active">
                  HOUSES
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/favorites" exact activeClassName="active">
                  FAVORITES
                </NavLink>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export const mapStateToProps = state => ({
  spells: state.spells,
  houses: state.houses,
  characters: state.characters
});

export default connect(mapStateToProps)(Header);
