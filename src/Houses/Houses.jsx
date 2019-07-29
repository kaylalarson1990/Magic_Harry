import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "./Houses.css";

export class Houses extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
  }

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
      founder,
      favoriteCard,
      info
    } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <article className="houseCard" key="front">
          <h2>{name}</h2>
          <button onClick={this.handleClick}>
            Click here for more details
          </button>
          <button onClick={e => favoriteCard(info.id)} className={`favorite-btn ${info.favorite && "favorite"}`}>
              Favorite
          </button>
        </article>
        <article className="houseCard" key="back">
          <p>
            <span>Mascot:</span> {mascot}
          </p>
          <p>
            <span>Head Of House:</span> {headOfHouse}
          </p>
          <p>
            <span>House Ghost:</span> {houseGhost}
          </p>
          <p>
            <span>Founder:</span> {founder}
          </p>
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
