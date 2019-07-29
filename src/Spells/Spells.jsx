import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "./Spells.css";

export class Spells extends Component {
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
    const { spell, type, effect, id, favoriteCard, info } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <article className="spellCard" key="front">
          <h2>{spell}</h2>
          <button onClick={this.handleClick}>
            Click here for more details
          </button>
          <button onClick={e => favoriteCard(info.id)} className={`favorite-btn ${info.favorite && "favorite"}`}>
              Favorite
          </button>
        </article>
        <article className="spellCard" key="back">
          <p>
            <span>Type:</span> {type}
          </p>
          <p>
            <span>Effect:</span> {effect}
          </p>
          <button onClick={this.handleClick}>Return to Front</button>
        </article>
      </ReactCardFlip>
    );
  }
}

Spells.propTypes = {
  spell: PropTypes.string,
  type: PropTypes.string,
  effect: PropTypes.string,
  id: PropTypes.number
};

export default Spells;
