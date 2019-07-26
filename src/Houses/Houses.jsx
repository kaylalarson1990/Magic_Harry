import React, { Component } from "react";
import PropTypes from "prop-types";
import './Houses.css'
import inactive from "../images/inactive.png";
import active from "../images/active.png";

export class Houses extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false
    }
  }

  render() {
    const {
      name,
      mascot,
      house,
      school,
      id,
      headOfHouse,
      houseGhost,
      founder
    } = this.props;
    return (
      <article className="houseCard">
        <h2>{name}</h2>
        <p>Click for more details</p>
        {/* <p>{mascot}</p>
                <p>{house}</p>
                <p>{school}</p>
                <p>{headOfHouse}</p>
                <p>{houseGhost}</p>
                <p>{founder}</p>
                 */}
        <img
          src={this.state.favorited ? active : inactive}
          alt="favorite icon"
          className="favorite-btn"
        />
      </article>
    );
  }
}

Houses.propTypes = {
    name: PropTypes.string,
    mascot: PropTypes.string,
    house: PropTypes.string,
    school: PropTypes.string,
    id: PropTypes.number,
    headOfHouse: PropTypes.string,
    houseGhost: PropTypes.string,
    founder: PropTypes.string
}

export default Houses;