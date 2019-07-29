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
      filtered: ""
    };
  }

  handleChange = e => {
    this.setState({
      filtered: e.target.value
    });
  };

  render() {
    const { favoriteCard } = this.props;
    let filteredSpells = this.props.spells.filter(spell => {
      return spell.spell.toLowerCase().indexOf(this.state.filtered) !== -1;
    });
    const displaySpells = filteredSpells.map(spell => (
      <Card info={spell} key={spell.created} favoriteCard={favoriteCard} />
    ));
    return (
      <>
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
      </>
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
