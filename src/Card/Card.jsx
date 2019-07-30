import React, { Component } from "react";
import "./Card.css";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";

export class Card extends Component {
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
    const { favoriteCard, info } = this.props;
    const cardInfo = [];
    for (let key in info) {
      if (key !== "id" && key !== "favorite") {
        cardInfo.push(
          <p className="card-info">
            <span className="head">{key.toUpperCase()}:</span> {info[key]}
          </p>
        );
      }
    }

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <article className="card" key="front">
          <h2>{info.name || info.spell}</h2>
          <button className="flip-card1" onClick={this.handleClick}>
            Click here for more details
          </button>
          <button
            onClick={e => favoriteCard(info.id)}
            className={`favorite-btn ${info.favorite && "favorite"}`}
          >
            Favorite
          </button>
        </article>
        <article className="card" key="back">
          {cardInfo}
          <button className="flip-card2" onClick={this.handleClick}>
            Return to Front
          </button>
        </article>
      </ReactCardFlip>
    );
  }
}

Card.propTypes = {
  info: PropTypes.object,
  favoriteCard: PropTypes.func
};

export default Card;
