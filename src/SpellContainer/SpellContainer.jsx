import React, { Component } from "react";
import { connect } from "react-redux";
import "../HouseContainer/Container.scss";
import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";

export class SpellContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      filtered: "",
      num: 30
    };
  }

  handleChange = e => {
    this.setState({
      filtered: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.num === 30) {
      this.setState({
        num: 60
      });
      e.target.innerText = "Show More";
    } else if (this.state.num === 60) {
      this.setState({
        num: 90
      });
      e.target.innerText = "Show More";
    } else if (this.state.num === 90) {
      this.setState({
        num: 120
      });
      e.target.innerText = "Show Less";
    } else {
      this.setState({
        num: 30
      });
      e.target.innerText = "Show More";
    }
  };

  render() {
    const { favoriteCard } = this.props;
    let filteredSpells = this.props.spells.filter(spell => {
      return spell.spell.toLowerCase().indexOf(this.state.filtered) !== -1;
    });
    const displaySpells = filteredSpells
      .slice(0, this.state.num)
      .map(spell => (
        <Card info={spell} key={spell.created} favoriteCard={favoriteCard} />
      ));

    return (
      <main>
        <article>
          <h2 className="title">Harry Potter Spells</h2>
          <input
            className="search__input"
            type="text"
            value={this.state.filtered}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </article>
        <section className="spells">{displaySpells}</section>
        <div className="show-more">
          <button className="showMoreBtn" onClick={e => this.handleClick(e)}>
            Show More
          </button>
        </div>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  spells: state.spells
});

SpellContainer.propTypes = {
  spells: PropTypes.array,
  setSpells: PropTypes.func
};

export default connect(mapStateToProps)(SpellContainer);
