import React, { Component } from "react";
import PropTypes from "prop-types";
import inactive from "../images/inactive.png";
import active from "../images/active.png";
import "./Characters.css";

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      favorites: false,
      error: ""
    };
  }

  render() {
    const { name, role, house, school, id, species } = this.props;
    return (
      <article className="characterCard">
        <h2>{name}</h2>
        <p>Click for more details</p>
        {/* <p>{role}</p>
                <p>{house}</p>
                <p>{school}</p>
                <p>{species}</p> */}
        <img
          src={this.state.favorited ? active : inactive}
          alt="favorite icon"
          className="favorite-btn"
        />
      </article>
    );
  }
}

Characters.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  house: PropTypes.string,
  species: PropTypes.string,
  id: PropTypes.number
};

export default Characters;
