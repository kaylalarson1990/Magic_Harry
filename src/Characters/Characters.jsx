import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "./Characters.css";

export class Characters extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      error: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const {
      name,
      role,
      house,
      school,
      id,
      species,
      favoriteCard,
      info
    } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <article className="characterCard" key="front">
          <h2>{name}</h2>
          <button onClick={this.handleClick}>
            Click here for more details
          </button>
          <button onClick={e => favoriteCard(info.id)} className={`favorite-btn ${info.favorite && "favorite"}`}>
              Favorite
          </button>
        </article>
        <article className="characterCard" key="back">
          <p>
            <span>Role:</span> {role}
          </p>
          <p>
            <span>House:</span> {house || "n/a"}
          </p>
          <p>
            <span>School:</span> {school || "n/a"}
          </p>
          <p>
            <span>Species:</span> {species}
          </p>
          <button onClick={this.handleClick}>Return to Front</button>
        </article>
      </ReactCardFlip>
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
