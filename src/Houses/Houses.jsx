import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "./Houses.css";
import inactive from "../images/inactive.png";
import active from "../images/active.png";

export class Houses extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false,
      isFlipped: false
    };
  }

  addFavorite = () => {
    this.state.favorited
      ? this.setState({ favorited: false })
      : this.setState({ favorited: true });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const {
      name,
      mascot,
      id,
      headOfHouse,
      houseGhost,
      founder
    } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <article className="houseCard" key="front">
          <h2>{name}</h2>
          <button onClick={this.handleClick}>
            Click here for more details
          </button>
          <img
            src={this.state.favorited ? active : inactive}
            alt="favorite icon"
            className="favorite-btn"
            onClick={this.addFavorite}
          />
        </article>
        <article className="houseCard" key="back">
          <p><span>Mascot:</span> {mascot}</p>
          <p><span>Head Of House:</span> {headOfHouse}</p>
          <p><span>House Ghost:</span> {houseGhost}</p>
          <p><span>Founder:</span> {founder}</p>
          <button onClick={this.handleClick}>Return to Front</button>
        </article>
      </ReactCardFlip>
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
};

export default Houses;
